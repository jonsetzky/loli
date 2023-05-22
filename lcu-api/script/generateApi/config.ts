import path from "path/posix";

const scriptRoot = "./script/generateApi";
const srcRoot = "./src";
const distRoot = "./dist";

const functionsFile = "functions.ts";
const typesFile = "types.ts";
const requestFile = "request.ts";
const indexFile = "index.ts";

const pathFilename = (str: string) => {
  return str?.split("\\")?.pop()?.split("/").pop() ?? "";
};
export const joinPath = (...paths: string[]) => path.join(...paths);

const r = (...paths: string[]) => joinPath(scriptRoot, ...paths);
const s = (...paths: string[]) => joinPath(srcRoot, ...paths);

export const CONFIG2 = {
  helpPath: r("help"),
  srcPath: srcRoot,
  distPath: distRoot,

  functionsPath: s(functionsFile),
  indexPath: s(indexFile),
  typesPath: s(typesFile),

  typesImport: "./" + pathFilename(typesFile).replace(/(?<!.d).ts/, ""),
  functionsImport: "./" + pathFilename(functionsFile).replace(/(?<!.d).ts/, ""),
  indexImport: "./" + pathFilename(indexFile).replace(/(?<!.d).ts/, ""),
  requestImport: "./" + pathFilename(requestFile).replace(/(?<!.d).ts/, ""),

  help: {
    combined: r("help/help-combined.json"),
    full: r("help/help-full.json"),
    console: r("help/help-console.json"),
  },
};
