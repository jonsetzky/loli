export interface ISummoner {
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

  profile?: {
    backgroundSkinId: number;
    /**
     * In JSON format
     */
    equippedBannerFlag: string;
    /**
     * In JSON format
     */
    regalia: string;
  };
}
