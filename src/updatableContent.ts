import { useEffect, useState } from "react";

export const useUpdatableContent = <T>(
  uri: string,
  update: boolean = true,
  onUpdate: (newContent: T) => void = () => {}
) => {
  const [content, setContent] = useState<T | null>();

  useEffect(() => {
    if (update)
      window.electron.onLcuEvent(uri, (e, type, newContent) => {
        setContent(newContent);
        onUpdate(newContent);
      });
    window.electron
      .getLcuUri(uri)
      .then((newContent: T) => setContent(newContent));
  }, []);

  return content;
};
