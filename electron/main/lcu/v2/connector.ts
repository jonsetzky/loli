import EventEmitter from "events";
import https from "https";
import { readFileSync, existsSync } from "fs";
import axios, { AxiosRequestConfig } from "axios";
import path from "path";
import YAML from "yaml";
import { execSync } from "child_process";
import WebSocket from "ws";
import {
  LCUConnectorRequestError,
  ILCUConnector,
  LCUSuccessResult,
  LCUResult,
} from "loli-lcu-api/src/connector.types";

export type LCUConnectorEvent = keyof LCUConnectorEventCallbacks;
export type LCUConnectorCallback<E extends LCUConnectorEvent> =
  LCUConnectorEventCallbacks[E];

export type LCUConnectorEventCallbacks = {
  connect: () => void;
  disconnect: () => void;
  lcuoffline: () => void;
  lcuonline: () => void;
  uriupdate: (uri: string, ...args: any[]) => void;
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

const getApplicationCommandLine = (name: string) =>
  execSync(`WMIC PROCESS WHERE name="${name}" GET commandline`)
    .toString()
    .replace(/\s+/g, " ")
    .replace(/^commandline\s*/i, "");

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

export class LCUConnector implements ILCUConnector {
  private eventEmitter: EventEmitter = new EventEmitter();

  private _clientOnline = false;

  public get clientOnline(): boolean {
    return this._clientOnline;
  }

  public set clientOnline(v: boolean) {
    if (this._clientOnline !== v) this.emit(v ? "lcuonline" : "lcuoffline");
    this._clientOnline = v;
  }

  private tryConnecting? = false;
  private connection?: Connection;

  private emit = <E extends LCUConnectorEvent>(
    name: E,
    ...args: Parameters<LCUConnectorCallback<E>>
  ) => this.eventEmitter.emit(name, ...args);

  request = <T>(
    url: string,
    method: string,
    args?: { [key: string]: any }
  ): LCUResult<T> => {
    if (!this.connection) {
      const out = {
        error: { reason: "clientoffline" },
        hasError: () => "error" in out,
      } as const;
      return out;
    }

    const config: AxiosRequestConfig<any> = {
      url: `https://127.0.0.1:${this.connection.port}${url}`,
      method,
      auth: {
        password: this.connection.pwd,
        username: "riot",
      },
      httpsAgent: new https.Agent({
        ca: readFileSync("./riotgames.pem"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      data: args,
    };
    const request = axios.request<T>(config);

    return {
      get: async () => (await request).data,
      watch: (callback) => {
        const cb = (u: string, v: T) => {
          if (u === url) callback(v);
        };
        request.then((r) => callback(r.data));
        this.on("uriupdate", cb);
        return () => this.off("uriupdate", cb);
      },
      hasError: () => "error" in this,
    };
  };

  on = <E extends LCUConnectorEvent>(
    event: E,
    callback: (
      ...p: Parameters<LCUConnectorCallback<E>>
    ) => ReturnType<LCUConnectorCallback<E>>
  ): LCUConnector => {
    this.eventEmitter.on(event, callback as any);
    return this;
  };

  off = <E extends LCUConnectorEvent>(
    event: E,
    callback: (
      ...p: Parameters<LCUConnectorCallback<E>>
    ) => ReturnType<LCUConnectorCallback<E>>
  ): LCUConnector => {
    this.eventEmitter.off(event, callback as any);
    return this;
  };

  /**
   * Starts attempting to connect until disconnect is called.
   */
  connect = async () => {
    console.log(await getLcuInstallPath("live"));
    this.tryConnecting = true;
    while (this.tryConnecting) {
      let port: number | undefined;
      let pwd: string | undefined;

      /** pwd and port can be get from either ux's cmd line or clients lockfile */
      while (!port && !pwd) {
        const uxCommandLine = getApplicationCommandLine("LeagueClientUx.exe");
        if (uxCommandLine !== " ") {
          this.clientOnline = true;
          pwd = uxCommandLine.match(/\"--remoting-auth-token=(.+?)\"/)?.at(1);
          port = Number(uxCommandLine.match(/\"--app-port=(\d+?)\"/)?.at(1));
          if (!!port !== !!pwd)
            throw new Error(
              "couldn't get both port and pwd from ux's cmd line arguments"
            );
          continue;
        }

        const clientCommandLine = getApplicationCommandLine("LeagueClient.exe");
        if (clientCommandLine === " ") return (this.clientOnline = false);
        this.clientOnline = true;

        const lf = await readLockfile();
        port = lf.port;
        pwd = lf.pwd;

        sleep(400);
      }
      if (!port || !pwd) continue;

      this.connection = { port, pwd };
      const c = this;
      const ws = new WebSocket(`wss://riot:${pwd}@127.0.0.1:${port}`, {
        auth: `Basic ${btoa(`riot:${pwd}`)}`,
        ca: readFileSync("./riotgames.pem"),
      });

      ws.on("error", (e) => {
        console.log("errer conn");
        console.log("connection failed", e);
        c.connection = undefined;
      });

      ws.on("open", function open() {
        console.log("open conn");
        ws.send('[5, "OnJsonApiEvent"]');
        c.emit("connect");
      });

      ws.on("close", () => {
        console.log("close conn");
        c.connection = undefined;
      });

      ws.on("message", (packet) => {
        const packetStr = packet.toString();
        if (!packetStr) return;
        let [opcode, event, data]: [number, string, any] = JSON.parse(
          packet.toString() ?? ""
        );

        c.emit("uriupdate", data.uri, data.data);
      });

      while (this.connection) {
        await sleep(1000);
      }
      this.emit("disconnect");
    }
  };

  disconnect = () => {
    this.tryConnecting = false;
    this.connection = undefined;
    this.emit("disconnect");
  };
}
