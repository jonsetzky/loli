import { useUpdatableContent } from "@/updatableContent";
import { ISummoner } from "electron/main/lcu/summoner";
import React, { memo, useEffect, useState } from "react";
import { AssetImage } from "./AssetImage";

export interface IFriend {
  availability: string;
  displayGroupId: number;
  displayGroupName: string;
  gameName: string;
  gameTag: string;
  groupId: number;
  groupName: string;
  icon: number;
  id: string;
  isP2PConversationMuted: boolean;
  lastSeenOnlineTimestamp: number | null;
  lol: any;
  name: string;
  note: string;
  patchline: string;
  pid: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  statusMessage: string;
  summary: string;
  summonerId: number;
  time: number;
}

export const FriendCard = memo(
  ({
    pid,
    setAvailability,
  }: {
    pid: string;
    setAvailability: (av: string | undefined) => void;
  }) => {
    const friend = useUpdatableContent<IFriend>("/lol-chat/v1/friends/" + pid, {
      onUpdate: (f) => setAvailability(f.availability),
    });
    if (!friend) return <></>;

    console.log("rerendering", pid);

    return (
      <div key={"sus"} className="bg-black text-white ">
        <div className="flex w-full">
          <div className="w-6">
            <AssetImage
              key={friend.icon}
              uri={`/profileicon/${friend.icon}.png`}
              placeholderSrc="/profileicon/29.png"
            />
          </div>
          <div className="grow">{friend.name}</div>
          <div>{friend.availability.replace(/dnd/, "playing")}</div>
        </div>
      </div>
    );
  }
);
