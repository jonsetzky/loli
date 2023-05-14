import React, { useEffect, useState } from "react";
import { FullscreenNotification } from "../components/FullscreenNotification";
import { ToggleSetting } from "../components/settings/ToggleSetting";

const Setting = ({ head, children }: { head: any; children?: any }) => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="grow">{head}</div>
      <div className="shrink">{children}</div>
    </div>
  );
};

export const Settings = ({
  visible,
  setVisible,
  windowFocusedDelayed,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  windowFocusedDelayed: boolean;
}) => {
  const [windowHasFocus, setWindowHasFocus] = useState(true);

  useEffect(() => {}, []);

  if (!visible) return <></>;

  return (
    <div
      className="absolute w-full h-screen z-50 bg-[#000000cb]"
      onClick={async () => {
        if (windowFocusedDelayed) setVisible(!visible);
      }}
    >
      <div className="grid place-content-center w-full h-screen">
        <div
          className="bg-black text-white p-4 border-white border-[0.5px] flex-col gap-2 min-w-[360px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="settings-header flex flex-row justify-start">
            <h1 className="text-3xl">Settings</h1>
          </div>
          <div className="flex flex-col">
            <ToggleSetting
              storeId="hide-real-client"
              label="Hide real client"
              onChange={(value) =>
                window.electron.getLcuUri(
                  value ? "/riotclient/kill-ux" : "/riotclient/launch-ux",
                  "post"
                )
              }
            ></ToggleSetting>
          </div>
        </div>
      </div>
    </div>
  );
};
