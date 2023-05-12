import React, { useEffect, useState, useSyncExternalStore } from "react";
import { FullscreenNotification } from "./components/FullscreenNotification";
import { useLoaderData } from "react-router-dom";
import type { LCUStatus } from "electron/main/lcu";

export const ClientStatus = () => {
  const [status, setStatus] = useState<LCUStatus>("starting");

  useEffect(() => {
    window.electron.onUpdateLcuStatus((e, newStatus) => {
      console.log("got status update", newStatus);
      setStatus(newStatus);
    });
    window.electron.getLcuStatus().then((newStatus) => setStatus(newStatus));
  }, []);

  if (status === "connected") return <></>;
  if (["starting", "connecting"].includes(status))
    return <FullscreenNotification>{status}</FullscreenNotification>;

  return (
    <FullscreenNotification>
      <div className="flex flex-col gap-2 divide-y-[0.1px] h-full">
        <h1 className="text-3xl font-light tracking-wider">Client offline</h1>

        <div className="grow pt-4 text-white text-xs font-extralight tracking-wide h-full flex flex-col">
          <div className="grid grid-cols-2">
            <div className="col-span-2 no-drag">
              Client appears to be offline
            </div>
            {/* <div className="col-span-2 text-xs text-slate-500">{"-"}</div> */}
          </div>
          <div className="grow" />
          <div className="flex flex-row justify-center divide-x-[0.1px]">
            <button
              className="rounded-sm text-white uppercase pr-2 pl-2 hover:text-glow text-xl tracking-[0.1em]"
              onClick={() => {
                window.electron.startClient();
              }}
            >
              start
            </button>
            <button
              className="rounded-sm text-white uppercase pl-2 pr-2 hover:text-glow text-xl tracking-[0.1em]"
              onClick={() => {
                window.electron.quit();
              }}
            >
              quit
            </button>
          </div>
        </div>
      </div>
    </FullscreenNotification>
  );
};
