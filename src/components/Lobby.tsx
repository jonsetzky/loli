import { updatableContent } from "@/updatableContent";
import React, { useState } from "react";
import { LobbySummonerCard } from "./LobbySummonerCard";
import { ISummoner } from "electron/main/lcu/summoner";

export interface IMember {
  allowedChangeActivity: boolean;
  allowedInviteOthers: boolean;
  allowedKickOthers: boolean;
  allowedStartActivity: boolean;
  allowedToggleInvite: boolean;
  autoFillEligible: boolean;
  autoFillProtectedForPromos: boolean;
  autoFillProtectedForSoloing: boolean;
  autoFillProtectedForStreaking: boolean;
  botChampionId: number;
  botDifficulty: string;
  botId: string;
  firstPositionPreference: string;
  isBot: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  primaryChampionPreference: number;
  puuid: string;
  ready: boolean;
  secondPositionPreference: string;
  secondaryChampionPreference: number;
  showGhostedBanner: boolean;
  summonerIconId: number;
  summonerId: number;
  summonerInternalName: string;
  summonerLevel: number;
  summonerName: string;
  teamId: number;
}

export const Lobby = () => {
  const members = updatableContent<IMember[]>("/lol-lobby/v2/lobby/members");
  return (
    <>
      <p className="bg-white">{JSON.stringify(members)}</p>
      <div className="">
        <div className="flex flex-col p-1 gap-1">
          {members?.map((m) => (
            <LobbySummonerCard member={m} />
          ))}
        </div>
      </div>
    </>
  );
};
