import { useEffect, useState } from "react";

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
  const [content, setContent] = useState<T | null>();

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
