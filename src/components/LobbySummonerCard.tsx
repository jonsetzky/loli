import React, { useEffect, useState } from "react";
import { IMember } from "./Lobby";
import { AssetImage } from "./AssetImage";
import { updatableContent } from "@/updatableContent";
import { ISummoner } from "electron/main/lcu/summoner";

export const LobbySummonerCard = ({ member }: { member: IMember }) => {
  const summoner = updatableContent(
    `/lol-hovercard/v1/friend-info-by-summoner/${member.summonerId}`
  );

  return (
    <div
      className="flex flex-row bg-white h-24 w-48 p-1 gap-1"
      id={member.summonerName}
    >
      <div className="flex flex-col">
        <div key={summoner?.icon} className="w-16 h-16">
          <AssetImage
            uri={`/lol-game-data/assets/v1/profile-icons/${
              summoner?.icon ?? 29
            }.jpg`}
            className="w-16"
          ></AssetImage>
        </div>
        {member.summonerName}
      </div>
      <div className="bg-black w-full"></div>
    </div>
  );
};
