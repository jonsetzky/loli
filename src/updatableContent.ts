import { useEffect, useState } from "react";

export const updatableContent = <T>(uri: string, update: boolean = false) => {
  const [content, setContent] = useState<T | null>();

  useEffect(() => {
    if (update)
      window.electron.onLcuEvent(uri, (e, type, newContent) => {
        setContent(newContent);
      });
    window.electron
      .getLcuUri(uri)
      .then((newContent: T) => setContent(newContent));
  }, []);

  return content;
};
