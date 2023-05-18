export const setLobbyQueueId = (id: number) => {
  window.electron.getLcuUri("/lol-lobby/v2/lobby", "post", { queueId: id });
};
