import { useEffect, useState } from "react";

export const updatableContent = <T>(uri: string) => {
  const [content, setContent] = useState<T | null>();

  useEffect(() => {
    window.electron.onUpdateLcuUri(uri, (e, newContent) => {
      console.log("updating lobby");
      setContent(newContent);
    });
    window.electron
      .getLcuUri(uri)
      .then((newContent: T) => setContent(newContent));
  }, []);

  return content;
};
