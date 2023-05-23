import { app, BrowserWindow, shell, ipcMain } from "electron";
import { release } from "node:os";
import { join } from "node:path";
import { update } from "./update";
import { Lockfile, readLockfile } from "./lcu/lockfile";
import { startClient, isClientAlive } from "./lcu/client";
import Store from "electron-store";
import { LCU, LCUStatus } from "./lcu";
import { request, requestAsset } from "./lcu/request";
import * as lcu from "loli-lcu-api";

import {
  SettingsKeys,
  SettingsValueType,
  getSetting,
  onSettingChange,
  setSetting,
} from "./settings";
import { LCUConnector } from "./lcu/v2/connector";

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, "../");
process.env.DIST = join(process.env.DIST_ELECTRON, "../dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, "../public")
  : process.env.DIST;

// Disable GPU Acceleration for Windows 7
if (release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

// (async () => {
//   const c = new LCUConnector();
//   c.connect();

//   c.on("connect", async () => {
//     const resp = lcu.summoner.current_summoner.getSummonerProfile(c as any);
//     if (!resp.hasError())
//       resp.watch((p) => lcu.lobby.lobby_matchmaking.postSearch(c as any))();
//   });
// })();

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null;
// Here, you can also use other preload
const preload = join(__dirname, "../preload/index.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, "index.html");

async function createWindow() {
  win = new BrowserWindow({
    title: "Main window",
    icon: join(process.env.PUBLIC, "favicon.ico"),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: true,
    },
    height: 720,
    width: 1280,
    resizable: false,
    titleBarStyle: "hidden",
  });

  if (url) {
    // electron-vite-vue#298
    win.loadURL(url);
    // Open devTool if the app is not packaged
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url);
    return { action: "deny" };
  });

  // Apply electron-updater
  update(win);

  const lcu = new LCU();
  lcu.start(win);
  ipcMain.handle("getLcuStatus", (): LCUStatus => {
    return lcu.status;
  });

  ipcMain.handle("window:isFocused", (e) => win?.isFocused());
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") app.quit();
});

app.on("second-instance", () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});

// New window example arg: new windows url
ipcMain.handle("open-win", (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`);
  } else {
    childWindow.loadFile(indexHtml, { hash: arg });
  }
});

ipcMain.handle("test", () => {
  console.log("test in the renderer");
});

ipcMain.handle("isClientAlive", () => {
  return isClientAlive();
});

ipcMain.handle("startClient", () => {
  startClient();
});

ipcMain.handle("window:minimize", () => {
  win?.minimize();
});

ipcMain.handle("quit", () => {
  app.quit();
});

ipcMain.handle("getLockfile", (): Promise<Lockfile | null> => {
  return readLockfile().catch((e) => null);
});

ipcMain.handle(
  "getLcuUri",
  async (_event, uri: string, method: string = "get", data?: any) => {
    // console.log("requested", uri);
    const lockfile = await readLockfile().catch((e) => null);
    if (!lockfile) return null;
    return request(lockfile, uri, method, data);
  }
);

ipcMain.handle("getLcuAsset", async (_event, uri: string) => {
  // console.log("requested asset", uri);
  const lockfile = await readLockfile().catch((e) => null);
  if (!lockfile) return null;
  return requestAsset(lockfile, uri);
});

const store = new Store();

ipcMain.handle("setStore", async (_event, key: string, data: any | null) => {
  store.set(key, data);
});

ipcMain.handle("getStore", async (_event, key: string) => {
  return store.get(key);
});

ipcMain.handle("openExternal", async (_event, url: string) => {
  const lf = await readLockfile();
  shell.openExternal(
    `${lf.protocol}://riot:${lf.password}@127.0.0.1:${lf.port}${url}`
  );
});

ipcMain.handle(
  "setSetting",
  async <K extends SettingsKeys, R extends SettingsValueType<K>>(
    _event: any,
    key: K,
    value: R
  ) => {
    setSetting(key, value, win);
  }
);

ipcMain.handle(
  "getSetting",
  async <K extends SettingsKeys, R extends SettingsValueType<K>>(
    _event: any,
    key: K
  ): Promise<R> => {
    return getSetting(key) as R;
  }
);

const conn = new LCUConnector();
let watchers: ((...args: any[]) => any)[] = [];

conn.on("connect", () => {
  ipcMain.handle(
    "lcuRequest",
    async (
      _event,
      url: string,
      method: string,
      args?:
        | {
            [key: string]: any;
          }
        | undefined
    ) => {
      const resp = conn.request(url, method, args);
      if (resp.hasError()) return { error: resp.error };
      const v = await resp.get();
      return v;
    }
  );

  ipcMain.handle("startLcuWatch", (_event, url: string) => {
    const cb = (uri: string, ...args: any[]) => {
      if (uri === url) {
        win?.webContents.send(`lcuWatchEvent:${url}`, args);
      }
    };
    conn.on("uriupdate", cb);
    return watchers.push(cb) - 1;
  });

  ipcMain.handle("stopLcuWatch", (_event, id: number) => {
    const cb = watchers[id];
    watchers = watchers.filter((c) => c !== cb);
    conn.off("uriupdate", cb);
  });
});
conn.connect();

// setInterval(() => {
//   win?.webContents.send(
//     "lcuEvent:/lol-chat/v1/friends/b487f6aa-ddfe-5a37-9702-aafce1c00222@eu1.pvp.net",
//     "update",
//     { name: "something", availability: "dnd", icon: 13 }
//   );
// }, 1000);
