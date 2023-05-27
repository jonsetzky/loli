import { useUpdatableContent } from "@/updatableContent";
import React, { useEffect, useState } from "react";
import { ErrorPage } from "../ErrorPage";
import { AssetImage } from "../common/AssetImage";
import champions from "@/assets/champion.json";
import { cancelCustomGameChampSelect } from "@/api/customGame";
import * as lcu from "loli-lcu-api";

export interface IChampSelectTeamParticipant {
  assignedPosition: string;
  cellId: number;
  championId: number;
  championPickIntent: number;
  entitledFeatureType: string;
  nameVisibilityType: string;
  obfuscatedPuuid: string;
  obfuscatedSummonerId: number;
  puuid: string;
  selectedSkinId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: number;
  team: number;
  wardSkinId: number;
}

export interface IChampSelectSession {
  actions: {
    actorCellId: number;
    championId: number;
    completed: boolean;
    id: number;
    isAllyAction: boolean;
    isInProgress: boolean;
    pickTurn: number;
    type: string;
  }[][];

  allowBattleBoost: boolean;
  allowDuplicatePicks: boolean;
  allowLockedEvents: boolean;
  allowRerolling: boolean;
  allowSkinSelection: boolean;
  bans: {
    myTeamBans: any[]; // number?
    numBans: number;
    theirTeamBans: any[]; // number?
  };
  benchChampions: any[];
  benchEnabled: boolean;
  boostableSkinCount: number;
  chatDetails: {
    mucJwtDto: {
      channelClaim: string;
      domain: string;
      jwt: string;
      targetRegion: string;
    };
    multiUserChatId: string;
    multiUserChatPassword: string;
  };
  counter: number;
  entitledFeatureState: {
    additionalRerolls: number;
    unlockedSkinIds: any[]; // number?
  };
  gameId: number;
  hasSimultaneousBans: boolean;
  hasSimultaneousPicks: boolean;
  isCustomGame: boolean;
  isSpectating: boolean;
  localPlayerCellId: number;
  lockedEventIndex: number;
  myTeam: IChampSelectTeamParticipant[];
  pickOrderSwaps: any[];
  recoveryCounter: number;
  rerollsRemaining: number;
  skipChampionSelect: boolean;
  theirTeam: IChampSelectTeamParticipant[];
  timer: {
    adjustedTimeLeftInPhase: number;
    internalNowInEpochMs: number;
    isInfinite: boolean;
    phase: string;
    totalTimeInPhase: number;
  };
  trades: any[];
}

interface IGridChampion {
  disabled: boolean;
  freeToPlay: boolean;
  freeToPlayForQueue: boolean;
  freeToPlayReward: boolean;
  id: number;
  masteryChestGranted: boolean;
  masteryLevel: number;
  masteryPoints: number;
  name: string;
  owned: boolean;
  positionsFavorited: string[];
  rented: boolean;
  roles: string[];
  selectionStatus: {
    banIntented: boolean;
    banIntentedByMe: boolean;
    isBanned: boolean;
    pickIntented: boolean;
    pickIntentedByMe: boolean;
    pickIntentedPosition: string;
    pickedByOtherOrBanned: boolean;
    selectedByMe: boolean;
  };
  squarePortraitPath: string;
}

const getChampionIconId = (id: number) => {
  return Object.values(champions.data).find((c) => c.key === String(id))
    ?.id as string;
};

const createNowForExternalTime = (et: number) => {
  const d = et - Date.now();
  return () => Date.now() + d;
};

export const ChampSelect = () => {
  const session = useUpdatableContent<IChampSelectSession>(
    "/lol-champ-select/v1/session"
  );
  const lobby = useUpdatableContent<lcu.LolLobbyLobbyDto>(
    "/lol-lobby/v2/lobby"
  );

  const hoverChampion = (id: number, lockIn: boolean = false) => {
    const pickAction = session?.actions[0].find((a) => a.type === "pick");
    window.electron.getLcuUri(
      "/lol-champ-select/v1/session/actions/" + String(pickAction?.id),
      "patch",
      {
        completed: lockIn,
        championId: id,
      }
    );
  };

  const allGridChamps = useUpdatableContent<IGridChampion[]>(
    "/lol-champ-select/v1/all-grid-champions"
  );

  const pickableChampions = useUpdatableContent<number[]>(
    "/lol-champ-select/v1/pickable-champion-ids"
  );

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!session) return;

    const end =
      session.timer.internalNowInEpochMs +
      session.timer.adjustedTimeLeftInPhase;

    const t = setInterval(() => setTimeLeft(end - Date.now()), 50);
    return () => clearInterval(t);
  }, [session]);

  if (!session) return <ErrorPage>loading champ select</ErrorPage>;
  return (
    <>
      <div className="h-24" />
      <div>{(timeLeft / 1000).toFixed(1)}</div>

      <div>
        {lobby?.gameConfig.gameMode !== "PRACTICETOOL" ? (
          ""
        ) : (
          <button
            className="btn"
            onClick={() => {
              cancelCustomGameChampSelect();
            }}
          >
            Quit
          </button>
        )}
      </div>
      <div className="grid grid-cols-9">
        {allGridChamps?.map((c) => (
          <AssetImage
            className=""
            uri={`/champion/${getChampionIconId(c.id)}.png`}
            onClick={() => hoverChampion(c.id)}
          />
        ))}
        {/* {pickableChampions
          ?.map(
            (c) =>
              Object.entries(champions.data).find(
                ([n, d]) => d.key === String(c)
              )?.[1]
          )
          .filter((c) => c !== undefined)
          .sort(function (a, b) {
            return (a as any).id.localeCompare((b as any).id);
          })
          .map((c) => (
            <AssetImage className="" uri={`/champion/${c?.id}.png`} />
          ))} */}
      </div>
      <div>{JSON.stringify(session)}</div>
    </>
  );
};
