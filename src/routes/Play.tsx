import { setLobbyQueueId } from "@/api/lobbyQueueId";
import { ErrorPage } from "@/components/ErrorPage";
import { GameModePicker } from "@/components/game-mode-picker/GameModePicker";
import { Lobby } from "@/components/lobby/Lobby";
import { useUpdatableContent } from "@/updatableContent";
import { useEffect, useState } from "react";
import { Outlet, Route, useNavigate } from "react-router-dom";

enum MapAssetNames {
  CHAMP_SELECT_BACKGROUND_SOUND = "champ-select-background-sound",
  CHAMP_SELECT_FLYOUT_BACKGROUND = "champ-select-flyout-background",
  CHAMP_SELECT_PLANNING_INTRO = "champ-select-planning-intro",
  GAME_SELECT_ICON_ACTIVE = "game-select-icon-active",
  GAME_SELECT_ICON_ACTIVE_VIDEO = "game-select-icon-active-video",
  GAME_SELECT_ICON_DEFAULT = "game-select-icon-default",
  GAME_SELECT_ICON_DISABLED = "game-select-icon-disabled",
  GAME_SELECT_ICON_HOVER = "game-select-icon-hover",
  GAME_SELECT_ICON_VIDEO = "game-select-icon-intro-video",
  GAMEFLOW_BACKGROUND = "gameflow-background",
  GAMEFLOW_BACKGROUND_DARK = "gameflow-background-dark",
  GAMESELECT_BUTTON_HOVER_SOUND = "gameselect-button-hover-sound",
  ICON_DEFEAT = "icon-defeat",
  ICON_DEFEAT_V2 = "icon-defeat-v2",
  ICON_DEFEAT_VIDEO = "icon-defeat-video",
  ICON_EMTPY = "icon-empty",
  ICON_HOVER = "icon-hover",
  ICON_LEAVER = "icon-leaver",
  ICON_LEAVER_V2 = "icon-leaver-v2",
  ICON_LOSS_FORGIVEN_V2 = "icon-loss-forgiven-v2",
  ICON_V2 = "icon-v2",
  ICON_VICTORY = "icon-victory",
  ICON_VICTORY_VIDEO = "icon-victory-video",
  MAP_NORTH = "map-north",
  MAP_SOUTH = "map-south",
  MUSIC_INQUEUE_LOOP_SOUND = "music-inqueue-loop-sound",
  PARTIES_BACKGROUND = "parties-background",
  POSTGAME_AMBIENCE_LOOP_SOUND = "postgame-ambience-loop-sound",
  READY_CHECK_BACKGROUND = "ready-check-background",
  READY_CHECK_BACKGROUND_SOUND = "ready-check-background-sound",
  SFX_AMBIENCE_PREGAME_LOOP_SOUND = "sfx-ambience-pregame-loop-sound",
  SOCIAL_ICON_LEAVER = "social-icon-leaver",
  SOCIAL_ICON_VICTORY = "social-icon-victory",
}

interface ITeamParticipant {
  championId: number;
  lastSelectedSkinIndex: number;
  profileIconId: number;
  puuid: string;
  summonerId: number;
  summonerInternalName: string;
  summonerName: string;
  teamOwner: boolean;
  teamParticipantId: number;
}

interface IGameFlow {
  gameClient: {
    observerServerIp: string;
    observerServerPort: number;
    running: boolean;
    serverIp: string;
    serverPort: number;
    visible: boolean;
  };
  gameData: {
    gameId: number;
    gameName: string;
    isCustomGame: boolean;
    password: string;
    playerChampionSelections: {
      championId: number;
      selectedSkinIndex: number;
      spell1Id: number;
      spell2Id: number;
      summonerInternalName: string;
    }[];
    queue: {
      allowablePremadeSizes: number[];
      areFreeChampionsAllowed: boolean;
      assetMutator: string;
      category: "PvP" | "Custom" | string;
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
        id: number;
        learningQuests: boolean;
        mainPickTimerDuration: number;
        maxAllowableBans: number;
        name: string;
        onboardCoopBeginner: boolean;
        pickMode: string;
        postPickTimerDuration: number;
        reroll: number;
        teamChampionPool: number;
      };
      id: number;
      isRanked: boolean;
      isTeamBuilderManaged: boolean;
      lastToggledOffTime: number;
      lastToggledOnTime: number;
      mapId: number;
      maximumParticipantListSize: number;
      minLevel: number;
      minimumParticipantListSize: number;
      name: string;
      numPlayersPerTeam: number;
      queueAvailability: "Available" | string;
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
    };
    spectatorsAllowed: boolean;
    teamOne: ITeamParticipant[];
    teamTwo: ITeamParticipant[];
  };
  gameDodge: {
    dodgeIds: any[];
    phase: "None" | string;
    state: "Invalid" | string;
  };
  map: {
    assets: {
      [key in MapAssetNames]: string;
    };
    categorizedContentBundles: any;
    description: string;
    gameMode: string;
    gameModeName: string;
    gameModeShortName: string;
    gameMutator: string;
    id: number;
    isRGM: boolean;
    mapStringId: string;
    name: string;
    perPositionDisallowedSummonerSpells: any;
    perPositionRequiredSummonerSpells: any;
    platformId: string;
    platformName: string;
    properties: {
      suppressRunesMasteriesPerks: boolean;
    };
  };
  phase:
    | "Lobby"
    | "Matchmaking"
    | "ReadyCheck"
    | "ChampSelect"
    | "GameStart"
    | "InProgress"
    | "WaitingForStats"
    | "PreEndOfGame"
    | "EndOfGame";
  // this is missing the eog phase
}

export const Play = () => {
  const gfStatus = useUpdatableContent<IGameFlow>("/lol-gameflow/v1/session");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(
      gfStatus?.phase !== undefined
        ? gfStatus.phase
            .toLowerCase()
            .replace(/matchmaking|readycheck|gamestart|none/, "lobby")
            .replace(/waitingforstats/, "preendofgame")
        : "lobby" // lobby handles having no lobby
    );
    console.log(gfStatus?.phase, gfStatus);
  }, [gfStatus]);

  return <Outlet />;
};
