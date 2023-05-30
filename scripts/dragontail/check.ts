import axios from "axios";
import { getLatestVersion } from "./latest";
import { readdirSync, readFileSync, existsSync } from "fs";
import { DragontailVersion } from "./dragontail";
import semver from "semver";

const findGreatestVersion = (
  versions: DragontailVersion[]
): DragontailVersion => {
  let greatest = versions[0];
  versions.splice(1).forEach((ver) => {
    if (semver.gte(ver, greatest)) greatest = ver;
  });
  return greatest as DragontailVersion;
};

/**
 * Returns true if there are updates available
 */
export const checkDragontailUpdates = async (): Promise<boolean> => {
  if (!existsSync("./dragontail/version")) return true;
  const latest = await getLatestVersion();
  //   const current = findGreatestVersion(
  //     readdirSync("./public/dragontail", {
  //       recursive: false,
  //     })
  //       .map((d) => d.toString())
  //       .filter((d) => d.match(/^\d+\.\d+\.\d+$/))
  //   );
  const current = readFileSync("./dragontail/version").toString();

  return semver.gt(latest, current);
};

if (require.main === module) {
  checkDragontailUpdates().then((u) => console.log(u));
}
