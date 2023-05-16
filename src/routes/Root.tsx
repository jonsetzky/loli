import React, { useEffect, useRef, useState } from "react";
import { ClientStatus as IClientStatus } from "electron/main/lcu/client";
import { ClientStatus } from "../ClientStatus";
import { Navbar } from "../Navbar";
import { Outlet, useOutletContext, useRevalidator } from "react-router-dom";
import { Settings } from "./Settings";
import { FriendList } from "@/components/FriendList";
import { GameModePicker } from "@/components/GameModePicker";

type RootContextType = {
  gameModePickerVisible: boolean;
  setGameModePickerVisible: (visible: boolean) => void;
  friendsListVisible: boolean;
  setFriendsListVisible: (visible: boolean) => void;
};

export const Root = () => {
  const [windowHasFocus, setWindowHasFocus] = useState(true);
  const [windowHasDelayedFocus, setWindowHasDelayedFocus] = useState(true);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [gameModePickerVisible, setGameModePickerVisible] = useState(false);
  const [friendsListVisible, setFriendsListVisible] = useState(false);

  window.onfocus = () => {
    setWindowHasFocus(true);
    setTimeout(() => setWindowHasDelayedFocus(true), 100);
  };
  window.onblur = () => {
    setWindowHasFocus(false);
    setTimeout(() => setWindowHasDelayedFocus(false), 100);
  };

  const createRootContext = (): RootContextType => {
    return {
      gameModePickerVisible,
      setGameModePickerVisible,
      friendsListVisible,
      setFriendsListVisible,
    };
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
        <GameModePicker
          visible={gameModePickerVisible}
          setVisible={setGameModePickerVisible}
        />
        <div className="h-full">
          {" "}
          <FriendList
            visible={friendsListVisible}
            setVisible={setFriendsListVisible}
          />
          <Outlet context={createRootContext()} />
        </div>
      </div>
    </>
  );
};

export const useRootContext = () => {
  return useOutletContext<RootContextType>();
};
