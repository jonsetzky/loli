import { contextBridge, ipcRenderer } from "electron";
import { LCUStatus } from "electron/main/lcu";
import type {
  SettingsKeys,
  SettingsValueType,
  getSetting,
  setSetting,
} from "electron/main/settings";

function domReady(
  condition: DocumentReadyState[] = ["complete", "interactive"]
) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true);
    } else {
      document.addEventListener("readystatechange", () => {
        if (condition.includes(document.readyState)) {
          resolve(true);
        }
      });
    }
  });
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find((e) => e === child)) {
      return parent.appendChild(child);
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find((e) => e === child)) {
      return parent.removeChild(child);
    }
  },
};

/**
 * https://tobiasahlin.com/spinkit
 * https://connoratherton.com/loaders
 * https://projects.lukehaas.me/css-loaders
 * https://matejkustec.github.io/SpinThatShit
 */
function useLoading() {
  const className = `loaders-css__square-spin`;
  const styleContent = `
@keyframes square-spin {
  25% { transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% { transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% { transform: perspective(100px) rotateX(0) rotateY(0); }
}
.${className} > div {
  animation-fill-mode: both;
  width: 50px;
  height: 50px;
  background: #fff;
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}
.app-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282c34;
  z-index: 9;
}
    `;
  const oStyle = document.createElement("style");
  const oDiv = document.createElement("div");

  oStyle.id = "app-loading-style";
  oStyle.innerHTML = styleContent;
  oDiv.className = "app-loading-wrap";
  oDiv.innerHTML = `<div class="${className}"><div></div></div>`;

  return {
    appendLoading() {
      safeDOM.append(document.head, oStyle);
      safeDOM.append(document.body, oDiv);
    },
    removeLoading() {
      safeDOM.remove(document.head, oStyle);
      safeDOM.remove(document.body, oDiv);
    },
  };
}

type Destructor = () => void;

const createIpcListener = (
  channel: string,
  callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
): Destructor => {
  ipcRenderer.on(channel, callback);
  return () => ipcRenderer.off(channel, callback);
};

const electronHandler = {
  test: () => ipcRenderer.invoke("test"),
  windowMinimize: () => ipcRenderer.invoke("window:minimize"),
  windowIsFocused: () => ipcRenderer.invoke("window:isFocused"),
  quit: () => ipcRenderer.invoke("quit"),
  startClient: () => ipcRenderer.invoke("startClient"),
  getLockfile: () => ipcRenderer.invoke("getLockfile"),

  getLcuUri: (
    uri: string,
    method: string = "get",
    data?: any,
    contentType?: "application/json" | "application/x-www-form-urlencoded"
  ): any => ipcRenderer.invoke("getLcuUri", uri, method, data),
  onLcuEvent: (
    uri: string,
    callback: (
      _event: any,
      eventType: "update" | "create" | "delete",
      ...args: any[]
    ) => void
  ) => {
    return createIpcListener(`lcuEvent:${uri}`, callback);
  },
  getLcuStatus: (): Promise<LCUStatus> =>
    ipcRenderer.invoke("getLcuStatus") as Promise<LCUStatus>,
  onUpdateLcuStatus: (callback: (_event: any, status: LCUStatus) => void) => {
    return createIpcListener("updateLcuStatus", callback);
  },
  getLcuAsset: (uri: string): any => ipcRenderer.invoke("getLcuAsset", uri),

  postLcu: (uri: string, data?: any): any =>
    ipcRenderer.invoke("postLcu", uri, data),
  delLcu: (uri: string): any => ipcRenderer.invoke("postLcu", uri),

  setStore: (key: string, data: any | null): any =>
    ipcRenderer.invoke("setStore", key, data),
  getStore: (key: string): any | null => ipcRenderer.invoke("getStore", key),

  openExternal: (url: string) => ipcRenderer.invoke("openExternal", url),

  setSetting: <K extends SettingsKeys, R extends SettingsValueType<K>>(
    key: K,
    value: R
  ) => ipcRenderer.invoke("setSetting", key, value),
  getSetting: <K extends SettingsKeys, R extends SettingsValueType<K>>(
    key: K
  ): Promise<R> => ipcRenderer.invoke("getSetting", key),
  onSettingChange: <K extends SettingsKeys, R extends SettingsValueType<K>>(
    key: K,
    callback: (_event: any, value: R) => void
  ): Destructor => {
    return createIpcListener(`settingChange:${key}`, callback);
  },

  lcuRequest: (
    url: string,
    method: string,
    args?:
      | {
          [key: string]: any;
        }
      | undefined
  ): Promise<any> =>
    ipcRenderer
      .invoke("lcuRequest", url, method, args)
      .then((v) =>
        Object.keys(v).includes("lcuApiError")
          ? Promise.reject(v.lcuApiError)
          : v
      ),
  lcuWatch: (
    callback: (v: any) => void,
    url: string,
    method: string,
    args?:
      | {
          [key: string]: any;
        }
      | undefined
  ): Destructor => {
    const dest = createIpcListener(`lcuWatchEvent:${url}`, (e, a) => {
      return Object.keys(a).includes("lcuApiError")
        ? callback(Promise.reject(a.lcuApiError))
        : callback(Promise.resolve(a));
    });
    const cbId = ipcRenderer.invoke("startLcuWatch", url);
    return () => {
      dest();
      ipcRenderer.invoke("stopLcuWatch", cbId);
    };
  },
};

contextBridge.exposeInMainWorld("electron", electronHandler);

export type ElectronHandler = typeof electronHandler;

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading();
domReady().then(appendLoading);

window.onmessage = (ev) => {
  ev.data.payload === "removeLoading" && removeLoading();
};

setTimeout(removeLoading, 4999);
