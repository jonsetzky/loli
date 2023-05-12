import axios from "axios";
import { Lockfile } from "./lockfile";
import { readFileSync } from "fs";
import https from "https";

export const request = (
  lockfile: Lockfile,
  endpoint: string,
  method: string = "get",
  data?: any
): Promise<any> => {
  return axios({
    method: method,
    url: `${lockfile.protocol}://127.0.0.1:${lockfile.port}${endpoint}`,
    auth: {
      password: lockfile.password,
      username: "riot",
    },
    httpsAgent: new https.Agent({
      ca: readFileSync("./riotgames.pem"),
    }),
    data: data,
  }).then((response) => response.data);
};

export const requestAsset = (
  lockfile: Lockfile,
  endpoint: string
): Promise<any> => {
  console.log("rrequested: ", endpoint);
  return axios({
    method: "get",
    url: `${lockfile.protocol}://127.0.0.1:${lockfile.port}${endpoint}`,
    auth: {
      password: lockfile.password,
      username: "riot",
    },
    httpsAgent: new https.Agent({
      ca: readFileSync("./riotgames.pem"),
    }),
    responseType: "arraybuffer",
  }).then((response) => {
    const base64 = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    return base64;
  });
};
