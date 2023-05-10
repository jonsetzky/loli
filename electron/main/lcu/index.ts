import { AxiosBasicCredentials } from "axios";
import { Lockfile, readLockfile } from "./lockfile";
import https from "https";
import fs from "fs";

export interface LCU {
  lockfile: Lockfile;
}

export class LCU {
  endpoint = (path: string): string =>
    `${this.lockfile.protocol}://127.0.0.1:${this.lockfile.port}${path}`;
  auth = (): AxiosBasicCredentials => ({
    password: this.lockfile.password,
    username: "riot",
  });

  httpsAgent: https.Agent;

  static create = async (): Promise<LCU> => {
    return new LCU(await readLockfile());
  };

  protected constructor(lockfile: Lockfile) {
    this.lockfile = lockfile;
    this.httpsAgent = new https.Agent({
      ca: fs.readFileSync("./riotgames.pem"),
    });
  }
}
