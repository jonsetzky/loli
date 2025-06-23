import { AxiosBasicCredentials } from "axios";
import { Lockfile, readLockfile } from "./lockfile";
import https from "https";
import fs from "fs";
import { readFileSync } from "fs";
import { WebSocket } from "ws";
import { BrowserWindow, app } from "electron";
import { request } from "./request";
import { isClientAlive, startClient } from "./client";
// import { getSetting, offSettingChange, onSettingChange } from "../settings";
import path from "path";
import EventEmitter from "events";

export { type Lockfile, readLockfile } from "./lockfile";
export { request, requestAsset } from "./request";
export { isClientAlive, startClient } from "./client";
export { LCUConnectorV2, type LCUStatus } from "./v2/connector";
