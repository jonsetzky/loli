export const createCustomGame = async () => {
  return await window.electron.getLcuUri("/lol-lobby/v2/lobby", "post", {
    customGameLobby: {
      configuration: {
        gameMode: "PRACTICETOOL",
        gameTypeConfig: {
          id: 1,
          gameModeOverride: "CLASSIC",
        },
        teamSize: 5,
        mapId: 11,
      },
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
    },
    isCustom: true,
    queueId: 0,
  });
};

export const startCustomGameChampSelect = async () => {
  return await window.electron.getLcuUri(
    "/lol-lobby/v1/lobby/custom/start-champ-select",
    "post"
  );
};

export const cancelCustomGameChampSelect = async () => {
  return await window.electron.getLcuUri(
    "/lol-lobby/v1/lobby/custom/cancel-champ-select",
    "post"
  );
};
