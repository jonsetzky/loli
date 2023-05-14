import { updatableContent } from "@/updatableContent";
import React, { useEffect, useState } from "react";
import { LobbySummonerCard } from "./LobbySummonerCard";
import { ISummoner } from "electron/main/lcu/summoner";
import { FullscreenNotification } from "./FullscreenNotification";
import { useNavigate } from "react-router-dom";
import queues from "../assets/queues.json";
import ReactDropdown from "react-dropdown";

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
export interface ILobby {
  canStartActivity: boolean;
  gameConfig: {
    allowablePremadeSizes: number[];
    customLobbyName: string;
    customMutatorName: string;
    customRewardsDisabledReasons: any[];
    customSpectatorPolicy: string;
    customSpectators: any[];
    customTeam100: any[];
    customTeam200: any[];
    gameMode: string;
    isCustom: boolean;
    isLobbyFull: boolean;
    isTeamBuilderManaged: boolean;
    mapId: number;
    maxHumanPlayers: number;
    maxLobbySize: number;
    maxTeamSize: number;
    pickType: string;
    premadeSizeAllowed: boolean;
    queueId: number;
    shouldForceScarcePositionSelection: boolean;
    showPositionSelector: boolean;
  };
  invitations: {
    invitationId: string;
    invitationType: string;
    state: string;
    timestamp: string;
    toSummonerId: number;
    toSummonerName: string;
  }[];
  localMember: {
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
  };
  members: IMember[];
  mucJwtDto: {
    channelClaim: string;
    domain: string;
    jwt: string;
    targetRegion: string;
  };
  multiUserChatId: string;
  multiUserChatPassword: string;
  partyId: string;
  partyType: string;
  restrictions: any[];
  scarcePositions: any[];
  warnings: any[];
}

const playableQueues = [
  {
    value: "430",
    label: "Some summoners rift",
  },
];

export const Lobby = () => {
  const lobby = updatableContent<ILobby>("/lol-lobby/v2/lobby");
  const searchState = updatableContent<any>(
    "/lol-lobby/v2/lobby/matchmaking/search-state"
  );
  const queueInfo = updatableContent<any>("/lol-game-queues/v1/queues");

  // const navigate = useNavigate();
  //   useEffect(() => {
  //     // window.on
  //     navigate("/test");
  //   });

  return (
    <>
      {searchState?.searchState === "Found" ? (
        <FullscreenNotification>
          <button
            className="rounded-sm text-white uppercase pr-2 pl-2 hover:text-glow text-xl tracking-[0.1em]"
            onClick={() => {
              window.electron.getLcuUri(
                "/lol-matchmaking/v1/ready-check/accept",
                "post"
              );
            }}
          >
            accept
          </button>
          <button
            className="rounded-sm text-white uppercase pr-2 pl-2 hover:text-glow text-xl tracking-[0.1em]"
            onClick={() => {
              window.electron.getLcuUri(
                "/lol-matchmaking/v1/ready-check/decline",
                "post"
              );
            }}
          >
            decline
          </button>
        </FullscreenNotification>
      ) : (
        <></>
      )}

      {/* <p className="bg-white">{JSON.stringify(members)}</p> */}
      <div className="flex flex-col h-full bg-black text-white">
        <div className="lobby-type-header flex flex-row justify-center w-full text-2xl bg-zinc-900">
          <ReactDropdown options={playableQueues} value={playableQueues[0]} />
          {/* <h1 className="p-2">
            {queues
              .find((q) => q.queueId === lobby?.gameConfig.queueId)
              ?.description?.replace(/\s*games/, "")}
          </h1> */}
        </div>
        <div>
          {queueInfo
            ?.filter(
              (q: any) =>
                q.queueAvailability === "Available" && q.category === "PvP"
            )
            .map((q: any) => (
              <>
                {q.gameMode + " - " + q.description}
                <br></br>
              </>
            )) ?? ""}
        </div>

        <div className="flex basis-[6%] m-1 justify-center">
          <button
            className={
              "uppercase text-sm p-1 font-semibold transition-colors text-black " +
              (searchState?.searchState === "Invalid"
                ? "bg-white"
                : "bg-blue-400")
            }
            onClick={() => {
              if (searchState?.searchState === "Invalid")
                window.electron.getLcuUri(
                  "/lol-lobby/v2/lobby/matchmaking/search",
                  "post"
                );
              else
                window.electron.getLcuUri(
                  "/lol-lobby/v2/lobby/matchmaking/search",
                  "delete"
                );
            }}
          >
            {searchState?.searchState === "Invalid" ? "search" : "cancel"}
          </button>
        </div>
        <div className="flex flex-row h-full">
          <div
            className="flex flex-col p-1 gap-1 basis-72 h-full"
            key={lobby?.partyId}
          >
            {lobby?.members.map((m) => (
              <LobbySummonerCard
                member={m}
                lobby={lobby ?? undefined}
                searchState={searchState}
              />
            ))}

            {[...Array(5 - (lobby?.members.length ?? 0))].map(() => (
              <LobbySummonerCard member={null} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="object-scale-down h-12"> */}
      {/* </div> */}

      {/* <p className="bg-white">{JSON.stringify(lobby)}</p> */}
    </>
  );
};
