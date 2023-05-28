import { fetchLCU } from "@/hooks/updatableContent";
import * as lcu from "loli-lcu-api";

export const createCustomGame = async () => {
  return await fetchLCU(lcu.lobby.postLobby, {
    customGameLobby: {
      configuration: {
        gameMode: "PRACTICETOOL",
        gameTypeConfig: {
          id: 1,
        } as any,
        teamSize: 5,
        mapId: 11,
      } as any,
      lobbyName: "hecasusser",
      teamOne: [
        {
          autoFillEligible: true,
          autoFillProtectedForPromos: true,
          autoFillProtectedForSoloing: true,
          autoFillProtectedForStreaking: true,
          botChampionId: 0,
          botDifficulty: "NONE",
          canInviteOthers: true,
          excludedPositionPreference: "string",
          id: 0,
          isBot: false,
          isOwner: true,
          isSpectator: false,
          showPositionExcluder: true,
          summonerInternalName: "hecasus",
        },
      ],
    } as any,
    isCustom: true,
    queueId: 0,
  }).get();
};

export const startCustomGameChampSelect = async () => {
  return await fetchLCU(lcu.lobby.lobby_custom.postStartChampSelect).get();
};

export const cancelCustomGameChampSelect = async () => {
  return await fetchLCU(lcu.lobby.lobby_custom.postCancelChampSelect).get();
};
