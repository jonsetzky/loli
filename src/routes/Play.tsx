import { setLobbyQueueId } from "@/api/lobbyQueueId";
import { ErrorPage } from "@/components/ErrorPage";
import { GameModePicker } from "@/components/game-mode-picker/GameModePicker";
import { Lobby } from "@/components/lobby/Lobby";
import { useEffect, useState } from "react";
import {
  Outlet,
  Route,
  useLoaderData,
  useLocation,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import * as lcu from "loli-lcu-api";
import { fetchLCU, useLCUWatch, useLCUWatch2 } from "@/updatableContent";
import { useMatch } from "react-router-dom";

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

export const Play = () => {
  const gfStatus = useLCUWatch2(lcu.gameflow.getSession);
  const navigate = useNavigate();
  const location = useLocation();
  // const router = useRouteMatch();
  const match = useMatch("/test");

  useEffect(() => {
    if (!location.pathname.match(/^\/test/)) return;
    if (!gfStatus) return navigate("lobby");
    console.log(gfStatus.phase);
    navigate(
      gfStatus.phase
        .toLowerCase()
        .replace(/matchmaking|readycheck|gamestart|none/, "lobby")
        .replace(/waitingforstats/, "preendofgame")
    );
  }, [match, gfStatus]);

  // useEffect(() => {
  //   console.log(gfAvailability);
  //   const gfStatus = useLCUWatch((c) => lcu.gameflow.getSession(c));
  //   if (!gfStatus) return;
  //   navigate(
  //     gfStatus.phase !== undefined
  //       ? gfStatus.phase
  //           .toLowerCase()
  //           .replace(/matchmaking|readycheck|gamestart|none/, "lobby")
  //           .replace(/waitingforstats/, "preendofgame")
  //       : "lobby" // lobby handles having no lobby
  //   );
  //   console.log(gfStatus.phase, gfStatus);
  // }, [gfAvailability]);

  return (
    <div className="h-full w-full bg-black text-white">
      <Outlet />
    </div>
  );
};
