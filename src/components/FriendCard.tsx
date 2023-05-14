import { useUpdatableContent } from "@/updatableContent";
import { ISummoner } from "electron/main/lcu/summoner";
import React, { memo, useEffect, useState } from "react";

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
    const friend = useUpdatableContent<IFriend>(
      "/lol-chat/v1/friends/" + pid,
      true,
      (f) => setAvailability(f.availability)
    );

    console.log("update friend card:", friend?.name);

    return (
      <div key={"sus"} className="bg-black text-white ">
        {friend?.name} {friend?.availability}
      </div>
    );
  }
);
