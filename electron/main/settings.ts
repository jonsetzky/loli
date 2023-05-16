import settings from "@/assets/settings";
import { BrowserWindow } from "electron";
import Store from "electron-store";
import { EventEmitter } from "ws";

type SettingsSchema = typeof settings;

type StrToType<T extends string> = T extends "boolean"
  ? boolean
  : T extends "string"
  ? string
  : T extends "number"
  ? number
  : never;

const store = new Store();
const changeEmitter = new EventEmitter();

export type SettingsKeys = keyof SettingsSchema;
export type SettingsValueType<K extends SettingsKeys> = StrToType<
  SettingsSchema[K]["type"]
>;

export const getSetting = <
  K extends SettingsKeys,
  R extends SettingsValueType<K>
>(
  key: K
): R => {
  return store.get(key) as R;
};

export const setSetting = <
  K extends SettingsKeys,
  R extends SettingsValueType<K>
>(
  key: K,
  value: R,
  win?: BrowserWindow | null
) => {
  store.set(key, value);
  win?.webContents.send(`settingChange:${key}`, value);
  changeEmitter.emit(key, value);
};

export const onSettingChange = <
  K extends SettingsKeys,
  R extends SettingsValueType<K>
>(
  key: K,
  callback: (value: R) => void
) => {
  changeEmitter.on(key, callback);
  callback(getSetting(key));
};

export const offSettingChange = <
  K extends SettingsKeys,
  R extends SettingsValueType<K>
>(
  key: K,
  callback: (value: R) => void
) => {
  changeEmitter.off(key, callback);
};
