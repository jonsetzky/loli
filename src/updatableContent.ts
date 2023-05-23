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

export const useLCUWatch = (<T>(
  getResult: (conn: LCUConnector) => lcu.LCUResult<T>,
  onChange?: (value: T) => void
): (T | null) | void => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    const conn = new LCUConnector();
    const result = getResult(conn);
    if (result.hasError()) return console.error(result.error);

    const dest = result.watch((v) => {
      if (onChange) return onChange(v);
      setValue(v);
    });

    return dest;
  }, []);

  if (!onChange) return value;
}) as (<T>(getResult: (conn: LCUConnector) => lcu.LCUResult<T>) => T | null) &
  (<T>(
    getResult: (conn: LCUConnector) => lcu.LCUResult<T>,
    onChange: (value: T) => void
  ) => void);

export const fetchLCU = <T>(
  getResult: (conn: LCUConnector) => lcu.LCUResult<T>,
  onValue?: (value: T) => void
) => {
  const conn = new LCUConnector();
  const result = getResult(conn);

  if (result.hasError()) return console.error(result.error);
  result.get().then((v) => (onValue ? onValue(v) : undefined));
};
