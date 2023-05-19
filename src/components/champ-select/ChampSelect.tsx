import { useUpdatableContent } from "@/updatableContent";
import React, { useEffect, useState } from "react";
import { ErrorPage } from "../ErrorPage";

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
  actions: (
    | any
    | {
        actorCellId: number;
        championId: number;
        completed: boolean;
        id: number;
        isAllyAction: boolean;
        isInProgress: boolean;
        pickTurn: number;
        type: string;
      }
  )[];

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

export const ChampSelect = () => {
  const session = useUpdatableContent<IChampSelectSession>(
    "/lol-champ-select/v1/session"
  );

  const lcuTime = useUpdatableContent<number>(
    "/data-store/v1/install-settings/gameflow-patcher-lock"
  );

  const [lcuNow, setLcuNow] = useState(() => {
    return () => -1;
  });

  const [end, setEnd] = useState(-1);

  const [timeLeft, setTimeLeft] = useState(0);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const end =
      (session?.timer.internalNowInEpochMs ?? 0) +
      (session?.timer.adjustedTimeLeftInPhase ?? 0);
    setLcuNow(() => () => Date.now() - (Date.now() - (lcuTime ?? 0)));

    const t = setInterval(() => {
      setTimeLeft(end - lcuNow());
    }, 100);
    return () => clearTimeout(t);
  }, [lcuTime]);

  useEffect(() => {
    setEnd(
      session?.timer.internalNowInEpochMs ??
        0 + (session?.timer.adjustedTimeLeftInPhase ?? 0)
    );
    setLcuNow(
      () => () =>
        Date.now() - (Date.now() - (session?.timer.internalNowInEpochMs ?? 0))
    );
  }, [session]);

  if (!session) return <ErrorPage>loading champ select</ErrorPage>;
  return (
    <>
      <div className="h-24" />
      <div>{end}</div>
      <div>{now}</div>
      <div>{(timeLeft / 1000).toFixed(1)}</div>
      <div>{JSON.stringify(session)}</div>
    </>
  );
};
