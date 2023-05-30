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

const main = async () => {
  if (!(await checkDragontailUpdates())) {
    console.log("No updates available.");
    return;
  }

  setup(".");

  const latest = await getLatestVersion();
  console.log("Downloading version", latest);
  console.log("URL", await getDragontailUrlByVersion(latest as any));

  await downloadTgz(
    await getDragontailUrlByVersion(latest as any),
    dragontailFolder("temp")
  );

  dragontailPostProcess(dragontailFolder("temp"));

  writeFileSync(dragontailFolder("version"), latest);

  copy(
    dragontailFolder("temp", latest, "data"),
    "./src/assets/dragontail/data",
    { overwrite: true }
  );

  copy(dragontailFolder("temp", latest, "img"), "./public/dragontail/img", {
    overwrite: true,
  });
};

if (require.main === module) {
  main();
}
