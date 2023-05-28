import { SettingsKeys, SettingsValueType } from "electron/main/settings";
import { useEffect, useState } from "react";

export const useSetting = <
  K extends SettingsKeys,
  R extends SettingsValueType<K>
>(
  key: K
): [R | null, (value: R) => void] => {
  const [value, setValue] = useState<R | null>(null);

  useEffect(() => {
    window.electron.getSetting<K, R>(key).then((v) => setValue(v));
    const dest = window.electron.onSettingChange<K, R>(key, (e, v) => {
      console.log("setting setting:", key, v);
      setValue(v);
    });
    return dest;
  }, []);

  const setSetting = (value: R) => {
    window.electron.setSetting(key, value);
    setValue(value);
  };

  return [value, setSetting];
};
