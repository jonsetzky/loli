import React, { useEffect, useRef, useState } from "react";
import { ClientStatus as IClientStatus } from "electron/main/lcu/client";
import { ClientStatus } from "../ClientStatus";
import { Navbar } from "../Navbar";
import { Outlet, useRevalidator } from "react-router-dom";
import { Settings } from "./Settings";

export const Root = () => {
  const [windowHasFocus, setWindowHasFocus] = useState(true);
  const [windowHasDelayedFocus, setWindowHasDelayedFocus] = useState(true);
  const [settingsVisible, setSettingsVisible] = useState(false);

  window.onfocus = () => {
    setWindowHasFocus(true);
    setTimeout(() => setWindowHasDelayedFocus(true), 100);
  };
  window.onblur = () => {
    setWindowHasFocus(false);
    setTimeout(() => setWindowHasDelayedFocus(false), 100);
  };
  return (
    <>
      <ClientStatus />
      <div className="flex flex-col h-full">
        <Navbar
          setSettingsVisible={setSettingsVisible}
          settingsVisible={settingsVisible}
        />
        <Settings
          visible={settingsVisible}
          setVisible={setSettingsVisible}
          windowFocusedDelayed={windowHasDelayedFocus}
        />
        <Outlet />
      </div>
    </>
  );
};
