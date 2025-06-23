import { existsSync } from "fs";
import { readLockfile } from "./lockfile";

import { spawn } from "child_process";

export let clientPid: number | undefined;

export interface ClientStatus {
  online: boolean;
  offlineMessage?: string;
}
export class ClientStatus {
  online: boolean;
  offlineMessage?: string;
  constructor(online: boolean, message?: string) {
    this.online = online;
    this.offlineMessage = message;
  }
}

const isPidRunning = (pid: number) => {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * To determine if the client is alive the following must be met:
 * - lockfile must exist
 * - client responds to requests to the port noted by the lockfile
 * @returns promise - rejects with reason when client is not alive,
 * resolves when it is running
 */
export const isClientAlive = async (): Promise<ClientStatus> => {
  const lockfileExists = existsSync("C:/Riot Games/League of Legends/lockfile");
  if (!lockfileExists) return new ClientStatus(false, "Coudln't find lockfile");

  const lf = await readLockfile();
  const pidRunning = isPidRunning(lf.pid);

  if (!pidRunning)
    return new ClientStatus(
      false,
      "Lockfile pid doesn't match a running process"
    );

  return new ClientStatus(true);
};

export const startClient = () => {
  console.log("Starting LOL client");
  spawn(
    "C:/Riot Games/Riot Client/RiotClientServices.exe",
    ["--launch-product=league_of_legends", "--launch-patchline=live"],
    { detached: true, stdio: ["ignore", "ignore", "ignore"] }
  );
};
