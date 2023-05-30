import { checkDragontailUpdates } from "./check";
import { downloadTgz } from "./download";
import { getDragontailUrlByVersion } from "./dragontail";
import { getLatestVersion } from "./latest";
import cliProgress from "cli-progress";
import path from "path";
import { dragontailPostProcess } from "./postprocess";
import { copy } from "fs-extra";
import { readFileSync, writeFileSync, existsSync } from "fs";

interface VersionsManifest {
  latest: string;
}

const editVersionsManifest = (
  fn: (manifest: VersionsManifest | undefined) => VersionsManifest
) => {
  let arg = undefined;
  if (existsSync("./public/dragontail/versions.json"))
    arg = JSON.parse(
      readFileSync("./public/dragontail/versions.json").toString()
    );

  writeFileSync("./public/dragontail/versions.json", JSON.stringify(fn(arg)));
};

const dragontailFolder = (...p: string[]): string =>
  path.join("./public/dragontail", ...p);

const main = async () => {
  if (!(await checkDragontailUpdates())) {
    console.log("No updates available.");
    return;
  }

  const latest = await getLatestVersion();
  console.log("Downloading version", latest);
  console.log("URL", await getDragontailUrlByVersion(latest as any));

  await downloadTgz(
    await getDragontailUrlByVersion(latest as any),
    dragontailFolder(latest)
  );

  dragontailPostProcess(dragontailFolder(latest));

  copy(dragontailFolder(latest, latest), "./public/dragontail/latest", {
    overwrite: true,
  });
  editVersionsManifest((m) => ({ ...m, latest }));
};

if (require.main === module) {
  main();
}
