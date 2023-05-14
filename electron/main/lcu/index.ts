import { AxiosBasicCredentials } from "axios";
import { Lockfile, readLockfile } from "./lockfile";
import https from "https";
import fs from "fs";
import { readFileSync } from "fs";
import { WebSocket } from "ws";
import { BrowserWindow } from "electron";
import { ISummoner } from "./summoner";
import { request } from "./request";
import { isClientAlive } from "./client";

export type LCUStatus =
  | "starting"
  | "connected"
  | "connecting"
  | "disconnected";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class LCU {
  private shouldRun = false;
  private _status: LCUStatus = "starting";
  private win?: BrowserWindow;
  get status() {
    return this._status;
  }
  private setStatus = (newStatus: LCUStatus) => {
    if (this._status !== newStatus) {
      console.log("updating status:", newStatus);
      this.win?.webContents.send("updateLcuStatus", newStatus);
    }
    this._status = newStatus;
  };

  constructor() {}

  start = async (win: BrowserWindow) => {
    this.win = win;
    this.shouldRun = true;

    while (this.shouldRun) {
      while (!(await isClientAlive()).online) {
        console.log("not alive");
        this.setStatus("disconnected");
        await sleep(500);
      }

      const lockfile = await readLockfile().catch((e) => null);
      if (!lockfile) {
        console.error("no lockfile found");
        continue;
      }
      const authString = btoa(`riot:${lockfile.password ?? ""}`);

      this.setStatus("connecting");
      let connected = false;
      while ((await isClientAlive()).online && !connected) {
        const newWs = new WebSocket(`wss://127.0.0.1:${lockfile.port}`, {
          // auth: "Basic " + authString,
          ca: readFileSync("./riotgames.pem"),
          headers: {
            Authorization: "Basic " + authString,
          },
          timeout: 1000,
        });

        newWs.on("error", (err) => {
          console.error("error connecting to lcu:", err);
        });
        newWs.on("close", () => {
          connected = false;
          console.log("disconnected from lcu");
        });
        newWs.on("open", () => {
          connected = true;
          console.log("connected to lcu");
          this.setStatus("connected");
          // subscribe to all events
          newWs.send('[5, "OnJsonApiEvent"]');
        });

        newWs.on("message", (packet) => {
          const packetStr = packet.toString();
          if (!packetStr) return;
          let [opcode, event, data]: [number, string, any] = JSON.parse(
            packet.toString() ?? ""
          );

          win?.webContents.send(
            `lcuEvent:${data.uri}`,
            data.eventType,
            data.data
          );
          console.log("got", data.eventType, "at", data.uri);
        });
        newWs.on("ping", () => console.log("ws pinged"));
        await sleep(2500);
      }

      while (connected) {
        await sleep(150);
      }

      this.setStatus("disconnected");
      console.error("disconnected: retrying connecting");
    }
  };

  stop = () => {
    this.shouldRun = false;
  };
}
