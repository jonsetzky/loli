import { useUpdatableContent } from "@/updatableContent";
import React, { useEffect, useState } from "react";
import { LobbySummonerCard } from "./LobbySummonerCard";
import { ISummoner } from "electron/main/lcu/summoner";
import { FullscreenNotification } from "../FullscreenNotification";
import { useNavigate } from "react-router-dom";
import queues from "../../assets/queues.json";
import ReactDropdown from "react-dropdown";
import { ErrorPage } from "@/components/ErrorPage";
import { GameModePicker } from "@/components/game-mode-picker/GameModePicker";
import { useRootContext } from "../../routes/Root";
import { setPartyType } from "@/api/partyType";
import { setLobbyQueueId } from "@/api/lobbyQueueId";
import { cancelMatchSearch, matchSearch } from "@/api/searchMatch";

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

export interface IQueue {
  allowablePremadeSizes: number[];
  areFreeChampionsAllowed: boolean;
  assetMutator: string;
  category: string;
  championsRequiredToPlay: number;
  description: string;
  detailedDescription: string;
  gameMode: string;
  gameTypeConfig: {
    advancedLearningQuests: boolean;
    allowTrades: boolean;
    banMode: string;
    banTimerDuration: number;
    battleBoost: boolean;
    crossTeamChampionPool: boolean;
    deathMatch: boolean;
    doNotRemove: boolean;
    duplicatePick: boolean;
    exclusivePick: boolean;
    gameModeOverride: any;
    id: number;
    learningQuests: boolean;
    mainPickTimerDuration: number;
    maxAllowableBans: number;
    name: string;
    numPlayersPerTeamOverride: any;
    onboardCoopBeginner: boolean;
    pickMode: string;
    postPickTimerDuration: number;
    reroll: boolean;
    teamChampionPool: boolean;
  };
  id: number;
  isRanked: boolean;
  isTeamBuilderManaged: boolean;
  lastToggledOffTime: number;
  lastToggledOnTime: number;
  mapId: number;
  maxDivisionForPremadeSize2: string;
  maxTierForPremadeSize2: string;
  maximumParticipantListSize: number;
  minLevel: number;
  minimumParticipantListSize: number;
  name: string;
  numPlayersPerTeam: number;
  queueAvailability: string;
  queueRewards: {
    isChampionPointsEnabled: boolean;
    isIpEnabled: boolean;
    isXpEnabled: boolean;
    partySizeIpRewards: any[];
  };
  removalFromGameAllowed: boolean;
  removalFromGameDelayMinutes: number;
  shortName: string;
  showPositionSelector: boolean;
  spectatorEnabled: boolean;
  type: string;
}

// export interface ILobbyGameConfig {
//   // allowablePremadeSizes?: number[];
//   // customLobbyName?: string;
//   // customMutatorName?: string;
//   // customRewardsDisabledReasons: any[];
//   // customSpectatorPolicy: string;
//   // customSpectators: any[];
//   // customTeam100: any[];
//   // customTeam200: any[];
//   // gameMode?: string;
//   // isCustom?: boolean;
//   // isLobbyFull: boolean;
//   // isTeamBuilderManaged: boolean;
//   // ?mapId: number;
//   // maxHumanPlayers: number;
//   // maxLobbySize: number;
//   // maxTeamSize: number;
//   // pickType: string;
//   // premadeSizeAllowed: boolean;
//   queueId: number;
//   // shouldForceScarcePositionSelection: boolean;
//   // showPositionSelector: boolean;
// }

export const Lobby = () => {
  // const ctx = useRootContext();

  /** Determines the party publicity */
  const [arrowVisible, setArrowVisible] = useState(false);
  const [queuePickerVisible, setQueuePickerVisible] = useState(false);

  const lobby = useUpdatableContent<ILobby>("/lol-lobby/v2/lobby");
  const searchState = useUpdatableContent<any>(
    "/lol-lobby/v2/lobby/matchmaking/search-state"
  );

  if (!searchState) return <ErrorPage>loading</ErrorPage>;
  if (!lobby)
    return (
      <>
        <GameModePicker
          gameMode={null}
          visible={queuePickerVisible}
          setVisible={setQueuePickerVisible}
          setQueue={setLobbyQueueId}
        ></GameModePicker>
        <ErrorPage className>
          No lobby
          <div className="flex justify-center m-4">
            <button className="btn" onClick={() => setQueuePickerVisible(true)}>
              Create
            </button>
          </div>
        </ErrorPage>
      </>
    );

  return (
    <>
      <GameModePicker
        gameMode={lobby.gameConfig.gameMode}
        visible={queuePickerVisible}
        setVisible={setQueuePickerVisible}
        setQueue={setLobbyQueueId}
      ></GameModePicker>
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
          {/* <ReactDropdown options={playableQueues} value={playableQueues[0]} /> */}
          {/* <h1 className="p-2">
            {queues
              .find((q) => q.queueId === lobby?.gameConfig.queueId)
              ?.description?.replace(/\s*games/, "")}
          </h1> */}
        </div>
        <div
          className="relative flex w-full justify-center text-2xl cursor-pointer"
          onMouseEnter={() => setArrowVisible(true)}
          onMouseLeave={() => setArrowVisible(false)}
          onClick={() => setQueuePickerVisible(true)}
        >
          {
            queues.find((q) => q.queueId === lobby.gameConfig.queueId)
              ?.description
          }
          <div className="relative">
            <div className="absolute w-full h-full top-1.5 left-1">
              {arrowVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                </svg>
              ) : (
                " "
              )}
            </div>
          </div>
        </div>
        <div className="flex basis-[6%] m-1 justify-center">
          <div className="basis-full" />
          <button
            className={
              "uppercase text-sm p-1 font-semibold transition-colors text-black " +
              (searchState?.searchState === "Invalid"
                ? "bg-white"
                : "bg-blue-400")
            }
            onClick={() => {
              if (searchState?.searchState === "Invalid") matchSearch();
              else cancelMatchSearch();
            }}
          >
            {searchState?.searchState === "Invalid" ? "search" : "cancel"}
          </button>
          <div className="flex justify-end basis-full">
            <button
              className={
                "uppercase text-sm p-1 font-semibold transition-colors text-black w-[4.5rem] " +
                (lobby.partyType === "open" ? "bg-green-500" : "bg-red-400")
              }
              onClick={() => {
                console.log("settings");
                setPartyType(lobby.partyType === "open" ? "closed" : "open");
              }}
            >
              {lobby.partyType === "open" ? "OPEN" : "CLOSED"}
            </button>
          </div>
        </div>
        <div className="flex flex-row h-full">
          <div
            className="flex flex-col p-1 gap-1 basis-72 h-full"
            key={lobby?.partyId}
          >
            {lobby?.members.map((m) => (
              <LobbySummonerCard
                key={m.summonerId}
                member={m}
                lobby={lobby ?? undefined}
                searchState={searchState}
                compact={lobby.gameConfig.maxLobbySize > 5}
              />
            ))}

            {[
              ...Array(
                lobby.gameConfig.maxLobbySize - (lobby?.members.length ?? 0)
              ),
            ].map((x, i) => (
              <LobbySummonerCard
                member={null}
                key={i}
                compact={lobby.gameConfig.maxLobbySize > 5}
              />
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
