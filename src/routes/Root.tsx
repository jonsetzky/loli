import React, { useEffect, useRef, useState } from "react";
import { ClientStatus as IClientStatus } from "electron/main/lcu/client";
import { ClientStatus } from "../ClientStatus";
import { Navbar } from "../components/navbar/Navbar";
import { Outlet, useOutletContext, useRevalidator } from "react-router-dom";
import { FriendList } from "@/components/friends-list/FriendList";

type RootContextType = {
  friendsListVisible: boolean;
  setFriendsListVisible: (visible: boolean) => void;
};

export const Root = () => {
  const [friendsListVisible, setFriendsListVisible] = useState(false);

  const createRootContext = (): RootContextType => {
    return {
      friendsListVisible,
      setFriendsListVisible,
    };
  };

  return (
    <>
      <ClientStatus />
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="h-full">
          {/* <FriendList
            visible={friendsListVisible}
            setVisible={setFriendsListVisible}
          /> */}
          <Outlet context={createRootContext()} />
        </div>
      </div>
    </>
  );
};

export const useRootContext = () => {
  return useOutletContext<RootContextType>();
};
