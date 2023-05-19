export const setStatusMessage = (msg: string) => {
  window.electron.getLcuUri("/lol-chat/v1/me", "put", { statusMessage: msg });
};

export const setAvailability = (av: "away" | "chat") => {
  window.electron.getLcuUri("/lol-chat/v1/me", "put", { availability: av });
};
