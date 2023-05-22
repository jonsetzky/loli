import path from "path/posix";

const inPath = "./in";
const distPath = "./src";

const functionsFile = "functions.ts";
const requestFile = "request.ts";
const typesFile = "types.ts";

export const joinPath = (...paths: string[]) => path.join(...paths);

export const CONFIG = {
  inPath,
  /** Path for module source code */
  distPath,
  functionsFile,
  typesFile,
  helpFiles: {
    full: "./help/help-full.json",
    console: "./help/help-console.json",
    combined: "./help/help-combined.json",
  },
  // this file is not generated
  requestFile,
  /** Path for module dist code */
  outPath: "./dist",
};
