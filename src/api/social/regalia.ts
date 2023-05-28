interface Regalia {
  preferredBannerType?: "blank" | "lastSeasonHighestRank";
  preferredCrestType?: "prestige" | "ranked";
  selectedPrestigeCrest?: number;
}

export const setRegalia = ({
  preferredBannerType,
  preferredCrestType,
  selectedPrestigeCrest,
}: Regalia) => {
  const p: Regalia = window.electron.getLcuUri(
    "/lol-regalia/v2/current-summoner/regalia",
    "get"
  );

  window.electron.getLcuUri("/lol-regalia/v2/current-summoner/regalia", "put", {
    preferredBannerType: preferredBannerType ?? p.preferredBannerType,
    preferredCrestType: preferredCrestType ?? p.preferredCrestType,
    selectedPrestigeCrest: selectedPrestigeCrest ?? p.selectedPrestigeCrest,
  });
};
