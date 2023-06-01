import { checkDragontailUpdates } from "./check";
import { downloadTgz } from "./download";
import { getDragontailUrlByVersion } from "./dragontail";
import { getLatestVersion } from "./latest";
import cliProgress from "cli-progress";
import path from "path";
import { dragontailPostProcess } from "./postprocess";
import { copy } from "fs-extra";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { setup } from "./setup";
import config from "./ddragon.config";
import { rmrf } from "./clean";

interface VersionsManifest {
  latest: string;
}

const ensureDir = (p: string) => {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
};

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
  path.join("./dragontail", ...p);

const main = async (download: boolean) => {
  if (download) {
    if (!(await checkDragontailUpdates())) {
      console.log("No updates available.");
      download = false;
    }
  } else {
    console.log("Not checking for updates. Reinstalling dragontail.");
  }

  setup(".");

  let latest = await getLatestVersion();

  if (download) {
    console.log("Downloading version", latest);
    console.log("URL", await getDragontailUrlByVersion(latest as any));
    await downloadTgz(
      await getDragontailUrlByVersion(latest as any),
      dragontailFolder("temp", `${latest}_temp`)
    );
    writeFileSync(dragontailFolder("version"), latest);
    dragontailPostProcess(dragontailFolder("temp", `${latest}_temp`), latest);
    await copy(
      dragontailFolder("temp", `${latest}_temp`, latest),
      dragontailFolder("temp", latest)
    );
    rmrf(dragontailFolder("temp", `${latest}_temp`));
  } else {
    latest = readFileSync("./dragontail/version").toString() as any;
  }

  if (existsSync("./src/assets/dragontail/data"))
    rmrf("./src/assets/dragontail/data");
  if (existsSync("./public/dragontail/img")) rmrf("./public/dragontail/img");

  copy(
    dragontailFolder("temp", latest, "data"),
    "./src/assets/dragontail/data",
    { overwrite: true }
  );

  config.includeImg?.forEach((imgFolder) => {
    copy(
      dragontailFolder("temp", latest, "img", imgFolder),
      path.join("./public/dragontail/img", imgFolder),
      {
        overwrite: true,
      }
    );
  });
};

if (require.main === module) {
  let download = true;
  if (process.argv.includes("nodownload")) download = false;

  main(download);
}
