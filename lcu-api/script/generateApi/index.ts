import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { IField, IStructType, combine } from "./combine";
// import { compile, compileFunctions, compileFunctions2 } from "./compile";
import prettier from "prettier";
import { compileTypes } from "./compileTypes";
import { CONFIG2, joinPath } from "./config";
import { compileFunctions2 } from "./compileFunctions";
import { compileIndex } from "./compileIndex";

const ensureDir = (d: string) => {
  if (!existsSync(d)) mkdirSync(d);
};

combine();
console.log("helps combined");

compileTypes();
console.log("types compiled");

compileFunctions2();
console.log("functions compiled");

compileIndex();
console.log("index compiled");

ensureDir(CONFIG2.distPath);
ensureDir(joinPath(CONFIG2.distPath, "cjs"));
ensureDir(joinPath(CONFIG2.distPath, "mjs"));

writeFileSync(
  joinPath(CONFIG2.distPath, "mjs/package.json"),
  JSON.stringify({
    type: "module",
  })
);
writeFileSync(
  joinPath(CONFIG2.distPath, "cjs/package.json"),
  JSON.stringify({
    type: "commonjs",
  })
);
