import { useEffect, useState } from "react";
import { LCUConnector } from "./lcuConnector";
import * as lcu from "loli-lcu-api";

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

export const useUpdatableContent = <T>(
  uri: string,
  options?: UpdatableContentOptions<T>
) => {
  const [content, setContent] = useState<T>();

  useEffect(() => {
    const destructors: (() => void)[] = [];
    const createListener = (uri: string, cb: (...args: any[]) => void) => {
      destructors.push(window.electron.onLcuEvent(uri, cb));
    };

    if (options?.update ?? true)
      createListener(uri, (e, type, data) => {
        setContent(data);
        if (options?.onUpdate) options.onUpdate(data);
      });

    if (options?.updateOnEventAtUri) {
      const listenUris: string[] =
        typeof options.updateOnEventAtUri === "string"
          ? [options.updateOnEventAtUri]
          : options.updateOnEventAtUri;

      listenUris.map((uri) =>
        createListener(uri, (e, type, data) => {
          setContent(data);
          if (options.onUpdate) options.onUpdate(data);
        })
      );
    }

    window.electron.getLcuUri(uri).then((data: T) => setContent(data));

    return () => destructors.forEach((cb) => cb());
  }, []);

  return content;
};

export function fetchLCU<T, A extends any[]>(
  lcuFn: (connector: lcu.ILCUConnector, ...args: A) => lcu.ILCUResult<T>,
  ...args: A
): lcu.ILCUResult<T> {
  return lcuFn(new LCUConnector(), ...args);
}

export const useLCUWatch2 = <T, E>(
  result: lcu.ILCUResult<T>,
  onError?: (err: lcu.LCUConnectorRequestError) => E
) => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(
    () =>
      result.watch((v) =>
        v.then(setValue).catch((e) => {
          if (onError) onError(e);
          setValue(null);
        })
      ),
    []
  );
  return value;
};

export const useLCUWatch = <T, E>(
  getResult: (conn: LCUConnector) => lcu.ILCUResult<T>,
  onError?: (err: lcu.LCUConnectorRequestError) => E
): [T | null, E | null] => {
  const [value, setValue] = useState<T | null>(null);
  const [errValue, setErrValue] = useState<E | null>(null);

  useEffect(() => {
    const conn = new LCUConnector();
    const dest = getResult(conn).watch((v) => {
      v.then((s) => {
        setValue(s);
        setErrValue(null);
      }).catch((e) => {
        setErrValue(onError ? onError(e) : null);
        setValue(null);
      });
    });

    return dest;
  }, []);

  return [value, errValue];
};
