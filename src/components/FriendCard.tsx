import { updatableContent } from "@/updatableContent";
import React from "react";

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

export const FriendCard = ({ pid }: { pid: string }) => {
  const friend = updatableContent<IFriend>("/lol-chat/v1/friends/" + pid);

  return (
    <div className="bg-black text-white ">
      {friend?.gameName} {friend?.availability}
    </div>
  );
};
