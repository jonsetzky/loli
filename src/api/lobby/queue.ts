import { fetchLCU } from "@/hooks/updatableContent";
import * as lcu from "loli-lcu-api";

export const setLobbyQueueId = (id: number) => {
  fetchLCU(lcu.lobby.postLobby, { queueId: id, isCustom: false });
};
