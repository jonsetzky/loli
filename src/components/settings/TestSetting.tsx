import { useSetting } from "@/hooks/settings";
import settings from "@/assets/settings";
import { SettingsKeys } from "electron/main/settings";
import React, { useId } from "react";
import { SettingBase } from "./SettingBase";
import { Tooltip } from "../common/Tooltip";

export const TestSetting = ({ id }: { id: SettingsKeys }) => {
  const eId = useId();
  const tooltipId = useId();
  const [val, setVal] = useSetting(id);

  let selector = null;

  console.log(id);
  if (settings[id].type === "boolean")
    selector = (
      <div className="">
        <input
          className="hidden"
          type="checkbox"
          id={eId}
          value="2"
          onChange={(e) => {
            setVal(e.currentTarget.checked);
          }}
          checked={val ?? false}
        />
        <label
          data-tooltip-id={tooltipId}
          htmlFor={eId}
          className="flex items-center justify-start w-10 border border-neutral-300 h-5 p-0.5 cursor-pointer"
        >
          <span className="w-4 h-4 bg-white" />
        </label>{" "}
        <Tooltip
          delayShow={750}
          id={tooltipId}
          classNameExtend="absolute uppercase"
          offset={1}
          float
        >
          {val ? "on" : "off"}
        </Tooltip>
      </div>
    );

  return <SettingBase label={settings[id].label}>{selector ?? ""}</SettingBase>;
};
