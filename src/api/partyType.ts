export const setPartyType = (type: "open" | "closed") => {
  console.log(
    window.electron.getLcuUri("/lol-lobby/v2/lobby/partyType", "put", type)
  );
};
