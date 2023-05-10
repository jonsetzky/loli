import { readFile } from "fs";

export interface Lockfile {
  pid: number;
  port: number;
  password: string;
  protocol: string;
}

export const readLockfile = async (): Promise<Lockfile> => {
  return new Promise((resolve, reject) => {
    readFile("C:/Riot Games/League of Legends/lockfile", (err, data) => {
      if (err) return reject(new Error("couldn't read lockfile"));

      const lockfileString = data.toString();
      if (!lockfileString) reject(new Error("couldn't read lockfile"));
      const regexMatch = lockfileString.match(
        /(leagueclient):(\d+):(\d+):(.+?):(.+)/i
      );

      if (!regexMatch) return reject(new Error("couldn't parse lockfile"));

      resolve({
        pid: Number.parseInt(regexMatch[2], 10),
        port: Number.parseInt(regexMatch[3], 10),
        password: regexMatch[4],
        protocol: regexMatch[5],
      });
    });
  });
};
