export const matchSearch = () => {
  window.electron.getLcuUri("/lol-lobby/v2/lobby/matchmaking/search", "post");
};

export const cancelMatchSearch = () => {
  window.electron.getLcuUri("/lol-lobby/v2/lobby/matchmaking/search", "delete");
};
