import EventEmitter from "events";
import https from "https";
import { readFileSync, existsSync } from "fs";
import axios, { AxiosRequestConfig } from "axios";
import path from "path";
import YAML from "yaml";
import { execSync, exec } from "child_process";
import WebSocket from "ws";
import {
  LCUConnectorRequestError,
  ILCUConnector,
  ILCUResult,
} from "loli-lcu-api/src/connector.types";
import * as lcu from "loli-lcu-api";
import { app } from "electron";

export type LCUConnectorEvent = keyof LCUConnectorEventCallbacks;
export type LCUConnectorCallback<E extends LCUConnectorEvent> =
  LCUConnectorEventCallbacks[E];

export type LCUConnectorEventCallbacks = {
  connect: () => void;
  disconnect: () => void;
  lcuoffline: () => void;
  lcuonline: () => void;
  uriupdate: (uri: string, arg: any) => void;
};

export type Connection = {
  port: number;
  pwd: string;
};

const readGameProductSettings = async (
  patchLine: "live" | "pbe"
): Promise<{ product_install_full_path: string; [key: string]: any }> => {
  if (!process.env.ProgramData)
    throw new Error("couldn't get path to Program Data");
  const metadataPath = path.join(
    process.env.ProgramData,
    "Riot Games/Metadata"
  );
  return YAML.parse(
    readFileSync(
      path.join(
        metadataPath,
        `league_of_legends.${patchLine}/league_of_legends.${patchLine}.product_settings.yaml`
      )
    ).toString()
  );
};

const getLcuInstallPath = (patchLine: "live" | "pbe"): Promise<string> =>
  readGameProductSettings(patchLine)
    .then((s) => s.product_install_full_path)
    .catch((e) => {
      throw e;
    });

const getApplicationCommandLine = async (name: string) =>
  new Promise<string>((resolve, reject) =>
    exec(`WMIC PROCESS WHERE name="${name}" GET commandline`, (err, out) => {
      if (err) reject("Error getting lcu command line");
      resolve(out.replace(/\s+/g, " ").replace(/^commandline\s*/i, ""));
    })
  );

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const readLockfile = async (): Promise<Connection> => {
  const installPath = await getLcuInstallPath("live");
  if (!existsSync(installPath)) return new Promise((r, rej) => rej(undefined));

  const data = readFileSync(path.join(installPath, "lockfile")).toString();
  const regexMatch = data.match(/(leagueclient):(\d+):(\d+):(.+?):(.+)/i);

  if (!regexMatch) return new Promise((r, rej) => rej(undefined));

  return {
    port: Number.parseInt(regexMatch[3], 10),
    pwd: regexMatch[4],
  };
};

type Destructor = () => void;
type CreateListenerFunc<T> = (callback: (v: Promise<T>) => void) => Destructor;

class LCUResult<T> implements ILCUResult<T> {
  get: () => Promise<T>;
  watch: (onUpdate: (value: Promise<T>) => void) => () => void;
  constructor(
    cl: CreateListenerFunc<T>,
    resultPromise: Promise<T>,
    url: string
  ) {
    this.get = () => resultPromise.then((v) => v);
    this.watch = (onUpdate) => {
      onUpdate(resultPromise.then((v) => v));
      const destructor = cl(onUpdate);
      return destructor;
    };
  }

  static error = (
    cl: CreateListenerFunc<any>,
    reason: LCUConnectorRequestError["reason"],
    url: string
  ) => {
    return new LCUResult(cl, Promise.reject({ reason }), url);
  };
}

const request = <T>(
  connector: LCUConnector,
  cfg: AxiosRequestConfig<any>,
  url: string,
  method: string,
  args?: { [key: string]: any }
): ILCUResult<T> => {
  const createListener = (cb: (v: Promise<T>) => void): Destructor => {
    const c = (uri: string, args: Promise<T>) =>
      uri === url ? cb(args) : undefined;

    connector.on(`uriupdate`, c);
    return () => connector.off(`uriupdate`, c);
  };

  if (!connector.connection)
    return LCUResult.error(createListener, "clientoffline", url);

  let config: AxiosRequestConfig<any> = {
    url: `https://127.0.0.1:${connector.connection.port}${url}`,
    method,
    auth: {
      password: connector.connection.pwd,
      username: "riot",
    },
    httpsAgent: new https.Agent({
      ca: readFileSync(path.join(process.env.PUBLIC, "riotgames.pem")),
    }),
    headers: {
      "Content-Type": "application/json",
    },
    data: args,
  };
  config = { ...config, ...cfg };

  const value = axios
    .request<T>(config)
    .then((v) => v.data)
    .catch((error) =>
      Promise.reject({
        reason: "httperror",
        error: {
          url: error.request.path,
          data: error.data,
          status: error.status,
          message: error.message,
          response: {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
          },
        },
      })
    );

  return new LCUResult(createListener, value, url);
};

export class LCUConnector implements ILCUConnector {
  protected eventEmitter: EventEmitter = new EventEmitter();

  protected _clientOnline = false;

  public get clientOnline(): boolean {
    return this._clientOnline;
  }

  public set clientOnline(v: boolean) {
    if (this._clientOnline !== v) this.emit(v ? "lcuonline" : "lcuoffline");
    this._clientOnline = v;
  }

  protected tryConnecting? = false;
  protected _connection?: Connection;

  public set connection(v: Connection | undefined) {
    if (this._connection?.port !== v?.port || this._connection?.pwd !== v?.pwd)
      this.emit(v ? "lcuonline" : "lcuoffline");
    this._connection = v;
  }
  public get connection(): Connection | undefined {
    return this._connection;
  }

  protected emit = <E extends LCUConnectorEvent>(
    name: E,
    ...args: Parameters<LCUConnectorCallback<E>>
  ) => {
    // console.log("emitting", name);
    this.eventEmitter.emit(name, ...args);
  };

  request = <T>(
    url: string,
    method: string,
    args?: { [key: string]: any }
  ): ILCUResult<T> => request(this, {}, url, method, args);

  on = <E extends LCUConnectorEvent | `uriupdate:${string}`>(
    event: E,
    callback: (
      ...args: E extends `uriupdate:${string}`
        ? Parameters<LCUConnectorCallback<"uriupdate">>
        : E extends LCUConnectorEvent
        ? Parameters<LCUConnectorCallback<E>>
        : never
    ) => ReturnType<
      E extends `uriupdate:${string}`
        ? LCUConnectorCallback<"uriupdate">
        : E extends LCUConnectorEvent
        ? LCUConnectorCallback<E>
        : never
    >
  ): LCUConnector => {
    console.log("listening", event);
    this.eventEmitter.on(event, callback as any);
    return this;
  };

  off = <E extends LCUConnectorEvent>(
    event: E,
    callback: (
      ...args: Parameters<LCUConnectorCallback<E>>
    ) => ReturnType<LCUConnectorCallback<E>>
  ): LCUConnector => {
    console.log("nolistening", event);
    this.eventEmitter.off(event, callback as any);
    return this;
  };

  /**
   * Starts attempting to connect until disconnect is called.
   */
  connect = async () => {
    this.tryConnecting = true;
    while (this.tryConnecting) {
      if (this.connection) {
        const clientCommandLine = await getApplicationCommandLine(
          "LeagueClient.exe"
        );
        if (clientCommandLine === " ") this.connection = undefined;
        await sleep(1500);
        continue;
      }

      let port: number | undefined;
      let pwd: string | undefined;

      const uxCommandLine = await getApplicationCommandLine(
        "LeagueClientUx.exe"
      );
      if (uxCommandLine !== " ") {
        this.clientOnline = true;
        pwd = uxCommandLine.match(/\"--remoting-auth-token=(.+?)\"/)?.at(1);
        port = Number(uxCommandLine.match(/\"--app-port=(\d+?)\"/)?.at(1));
        if (!port || !pwd)
          throw new Error(
            "couldn't get port or pwd from ux's cmd line arguments"
          );
        this.connection = {
          pwd,
          port,
        };
        continue;
      }

      const clientCommandLine = await getApplicationCommandLine(
        "LeagueClient.exe"
      );
      if (clientCommandLine === " ") {
        this.connection = undefined;
        await sleep(1500);
        continue;
      }
      const lf = await readLockfile();
      port = lf.port;
      pwd = lf.pwd;
      this.connection = {
        pwd,
        port,
      };

      // ws.on("error", (e) => {
      //   console.log("errer conn");
      //   console.log("connection failed", e);
      //   c._connection = undefined;
      // });

      // ws.on("open", function open() {
      //   console.log("open conn");
      //   ws.send('[5, "OnJsonApiEvent"]');
      // });

      // ws.on("close", () => {
      //   console.log("close conn");
      //   c._connection = undefined;
      // });

      // ws.on("message", (packet) => {
      //   const packetStr = packet.toString();
      //   if (!packetStr) return;
      //   let [opcode, event, data]: [number, string, any] = JSON.parse(
      //     packet.toString() ?? ""
      //   );

      //   c.emit(`uriupdate`, data.uri, data.data);
      // });

      // while (this._connection) {
      //   await sleep(1000);
      // }
    }
  };

  protected tryListen = false;
  listen = async () => {
    this.tryListen = true;
    while (this.tryListen) {
      if (!this.connection) {
        await sleep(1000);
        continue;
      }

      const c = this;
      const ws = new WebSocket(
        `wss://riot:${this.connection.pwd}@127.0.0.1:${this.connection.port}`,
        {
          auth: `Basic ${btoa(`riot:${this.connection.pwd}`)}`,
          ca: readFileSync(path.join(process.env.PUBLIC, "riotgames.pem")),
        }
      );
      ws.on("error", (e) => {
        // console.log("errer conn");
        console.error("connection failed", e);
        this.connection = undefined; // this will start a reconnection attempt
      });

      ws.on("open", function open() {
        // console.log("open conn");
        ws.send('[5, "OnJsonApiEvent"]');
        c.emit("connect");
      });

      ws.on("close", () => {
        // console.log("close conn");
        this.connection = undefined; // this will start a reconnection attempt
        c.emit("disconnect");
        ws.terminate();
      });

      ws.on("message", (packet) => {
        const packetStr = packet.toString();
        if (!packetStr) return;
        let [opcode, event, data]: [number, string, any] = JSON.parse(
          packet.toString() ?? ""
        );

        // console.log("got update", data.uri);
        c.emit(`uriupdate`, data.uri, data.data);
      });

      while (this.connection) {
        await sleep(1000);
      }
    }
  };

  stopListening = () => {
    this.tryListen = false;
  };

  disconnect = () => {
    this.tryConnecting = false;
    this._connection = undefined;
  };

  constructor() {
    this.eventEmitter.setMaxListeners(3);
  }
}

export class LCUAssetConnector extends LCUConnector {
  request = <T>(
    url: string,
    method: string,
    args?: { [key: string]: any } | undefined
  ): ILCUResult<T> =>
    request(
      this,
      {
        headers: undefined,
        responseType: "arraybuffer",
      },
      url,
      method,
      args
    );
}
