import path from "path/posix";

const scriptRoot = "./script/generateApi";
const srcRoot = "./src";
const distRoot = "./dist";

const functionsFile = "functions.ts";
const typesFile = "types.ts";
const requestFile = "request.ts";
const indexFile = "index.ts";
const connectorFile = "connector.types.ts";

const pathFilename = (str: string) => {
  return str?.split("\\")?.pop()?.split("/").pop() ?? "";
};
export const joinPath = (...paths: string[]) => path.join(...paths);

const r = (...paths: string[]) => joinPath(scriptRoot, ...paths);
const s = (...paths: string[]) => joinPath(srcRoot, ...paths);

const importFromFile = (str: string) =>
  "./" + pathFilename(str).replace(/(?<!.d).ts/, "");

export const CONFIG2 = {
  helpPath: r("help"),
  srcPath: srcRoot,
  distPath: distRoot,

  functionsPath: s(functionsFile),
  indexPath: s(indexFile),
  typesPath: s(typesFile),

  typesImport: importFromFile(typesFile),
  functionsImport: importFromFile(functionsFile),
  indexImport: importFromFile(indexFile),
  requestImport: importFromFile(requestFile),
  connectorImport: importFromFile(connectorFile),

  help: {
    combined: r("help/help-combined.json"),
    full: r("help/help-full.json"),
    console: r("help/help-console.json"),
  },
};
