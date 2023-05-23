import * as lcu from "loli-lcu-api";

export class LCUConnector implements lcu.ILCUConnector {
  request<T>(
    url: string,
    method: string,
    args?: { [key: string]: any } | undefined
  ): lcu.LCUResult<T> {
    const response = window.electron.lcuRequest(url, method, args).then((r) => {
      Object.keys(r).includes("error");
      if (Object.keys(r).includes("error")) {
        const out = { error: r.error, hasError: () => "error" in out };
        return out;
      }
      return r;
    });
    console.log(response);

    const out: lcu.LCUResult<any> = {
      get: () => response,
      watch: (callback: (value: any) => void) => {
        const dest = window.electron.lcuWatch(callback, url, method, args);
        response.then((r) => callback(r));
        return dest;
      },
      hasError: () => "error" in out,
    };
    return out;
  }
}
