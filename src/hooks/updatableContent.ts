import { useEffect, useState } from "react";
import { LCUConnector } from "../api/lcuConnector";
import * as lcu from "loli-lcu-api";
import { ipcRenderer } from "electron";

interface UpdatableContentOptions<T> {
  /**
   * Listen for events at these uris to activate a re-fetch for content.
   */
  updateOnEventAtUri?: string[] | string;
  onUpdate?: (data: T) => void;

  /**
   * Set to false if only fetching once.
   */
  update?: boolean;
}

export type LCUFN<T, A extends any[]> = (
  connector: lcu.ILCUConnector,
  ...args: A
) => lcu.ILCUResult<T>;

export function fetchLCU<T, A extends any[]>(
  lcuFn: LCUFN<T, A>,
  ...args: A
): lcu.ILCUResult<T> {
  return lcuFn(new LCUConnector(), ...args);
}

export const useLCUWatch = <T, E, A extends any[]>(
  lcuFn: LCUFN<T, A>,
  onError?: (err: lcu.LCUConnectorRequestError) => E,
  ...args: A
) => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    const conn = new LCUConnector();

    return lcuFn(conn, ...args).watch((v) =>
      v.then(setValue).catch((e) => {
        if (onError) onError(e);
        setValue(null);
      })
    );
  }, []);

  return value;
};
