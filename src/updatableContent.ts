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
    if (options?.update ?? true)
      window.electron.onLcuEvent(uri, (e, type, data) => {
        setContent(data);
        if (options?.onUpdate) options.onUpdate(data);
      });

    if (options?.updateOnEventAtUri) {
      const listenUris: string[] = (
        options.updateOnEventAtUri === "string"
          ? [options.updateOnEventAtUri]
          : options.updateOnEventAtUri
      ) as string[];

      listenUris.forEach((uri) =>
        window.electron.onLcuEvent(uri, (e, type, data) => {
          setContent(data);
          if (options.onUpdate) options.onUpdate(data);
        })
      );
    }

    window.electron.getLcuUri(uri).then((data: T) => setContent(data));
  }, []);

  return content;
};
