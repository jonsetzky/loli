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
    <div className="flex flex-col bg-white w-48" id={member.summonerName}>
      <div className="flex justify-center text-sm">
        <div className="basis-1/3 flex row grow justify-end">
          <div className="flex flex-col justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={
                "w-3 h-3 mr-0.5 " + (member.isLeader ? "" : "invisible")
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>

        <div className="">{member.summonerName}</div>
        <div className="basis-1/3 grow"></div>
      </div>

      <div className="flex flex-row mb-1 ml-1 mr-1 gap-1">
        <div className="flex flex-col gap-1 w-16">
          <AssetImage
            uri={`/lol-game-data/assets/v1/profile-icons/${
              summoner?.icon ?? 29
            }.jpg`}
            className="w-16"
          ></AssetImage>
          <div className="flex flex-row grow justify-evenly">
            <img
              src={`./positions/position-${member.firstPositionPreference.toLowerCase()}.svg`}
              className="h-4"
              style={{
                filter: "brightness(0)",
              }}
            />
            <img
              src={`./positions/position-${member.secondPositionPreference.toLowerCase()}.svg`}
              className="h-4"
              style={{
                filter: "brightness(0%)",
              }}
            />
          </div>
        </div>
        <div className="bg-black w-full grow"></div>
      </div>
    </div>
  );
};
