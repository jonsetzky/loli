import { existsSync, rmdirSync, rmSync, readdirSync, renameSync } from "fs";
import { move } from "fs-extra";
import path from "path";

export const dragontailPostProcess = (dir: string) => {
  const d = (...args: any[]) => path.join(dir, ...args);

  /** Confirm that dir is post processable by checking that dragonhead.js exists */
  if (!existsSync(d("dragonhead.js")))
    throw new Error("coudln't postprocess directory: " + dir);

  const version = readdirSync(dir).find((d) => d.match(/^\d+\.\d+\.\d+$/));
  if (!version) throw new Error("couldn't find folder with version as a name");

  const patchDir = readdirSync(dir).find((d) => d.match(/^lolpatch_/));
  if (patchDir) rmSync(d(patchDir), { recursive: true, force: true });

  renameSync(d("languages.json"), d(`${version}/languages.json`));
  rmSync(d("languages.js"));

  rmSync(d(version, "js"), { recursive: true, force: true });
  rmSync(d(version, "css"), { recursive: true, force: true });

  readdirSync(d("img")).forEach((imgDir) => {
    let ext = "";
    if (existsSync(d(version, "img", imgDir))) ext = "2";
    renameSync(d("img", imgDir), d(version, "img", imgDir + ext));
  });
  rmSync(d("img"), { recursive: true, force: true });

  rmSync(d("dragonhead.js"));
  //   renameSync(d(version), d());
};
