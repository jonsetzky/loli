import * as lcu from "loli-lcu-api";

/**
 * Implements connector for lcu functions utilizing electron ipc
 */
export class LCUConnector implements lcu.ILCUConnector {
  request<T>(
    url: string,
    method: string,
    args?: { [key: string]: any } | undefined
  ): lcu.ILCUResult<T> {
    const response = window.electron.lcuRequest(url, method, args);

    const out: lcu.ILCUResult<T> = {
      get: () => response,
      watch: (callback) => {
        callback(response);
        return window.electron.lcuWatch(callback, url);
      },
    };
    return out;
  }
}
