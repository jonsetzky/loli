export type DragontailVersion =
  | `${number}.${number}.${number}`
  | `lolpatch_${number}.${number}`;

export const VERSIONS_URL =
  "https://ddragon.leagueoflegends.com/api/versions.json";

export const getDragontailUrlByVersion = (version: DragontailVersion) =>
  `https://ddragon.leagueoflegends.com/cdn/dragontail-${version}.tgz`;
