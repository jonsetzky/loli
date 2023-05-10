import axios from "axios";
import { LCU } from ".";

export interface Summoner {
  accountId: number;
  displayName: string;
  internalName: string;
  nameChangeFlag: false;
  percentCompleteForNextLevel: number;
  privacy: string;
  profileIconId: number;
  puuid: string;
  rerollPoints: {
    currentPoints: number;
    maxRolls: number;
    numberOfRolls: number;
    pointsCostToRoll: number;
    pointsToReroll: number;
  };
  summonerId: number;
  summonerLevel: number;
  unnamed: false;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
}
export const getLocalSummoner = (lcu: LCU): Promise<Summoner> => {
  return axios({
    method: "get",
    url: lcu.endpoint("/lol-summoner/v1/current-summoner"),
    auth: lcu.auth(),
    httpsAgent: lcu.httpsAgent,
  }).then((response) => response.data as Summoner);
};
