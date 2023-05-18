import axios, { AxiosRequestConfig } from "axios";
import { Lockfile } from "./lockfile";
import { readFileSync } from "fs";
import https from "https";

export const request = (
  lockfile: Lockfile,
  endpoint: string,
  method: string = "get",
  data?: any
): Promise<any> => {
  const url = `${lockfile.protocol}://127.0.0.1:${lockfile.port}${endpoint}`;
  const config: AxiosRequestConfig<any> = {
    method: method,
    auth: {
      password: lockfile.password,
      username: "riot",
    },
    httpsAgent: new https.Agent({
      ca: readFileSync("./riotgames.pem"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (method === "put")
    return axios
      .put(url, typeof data === "string" ? '"' + data + '"' : data, config)
      .then((response) => response.data)
      .catch((e) => console.error("error at", endpoint, e.response.data));
  // console.log("data", typeof data);
  return axios({ ...config, data, url })
    .then((response) => response.data)
    .catch((e) => console.error("error at", endpoint, e.response.data));
};

export const requestAsset = (
  lockfile: Lockfile,
  endpoint: string
): Promise<any> => {
  // console.log("rrequested: ", endpoint);

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
  })
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.error("error at", endpoint, e.response.data));
};
