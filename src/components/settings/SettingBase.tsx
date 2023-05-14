import React from "react";

export const SettingBase = (
  props: { storeId: string; label: string | JSX.Element } & any
) => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="grow">{props.label}</div>
      <div className="shrink">{props.children}</div>
    </div>
  );
};
