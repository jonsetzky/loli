import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { IField, IStructType, combine } from "./combine";
// import { compile, compileFunctions, compileFunctions2 } from "./compile";
import prettier from "prettier";
import { compileTypes } from "./compileTypes";
import { CONFIG, joinPath } from "./config";
import { compileFunctions2 } from "./compileFunctions";
if (!existsSync(CONFIG.outPath)) mkdirSync(CONFIG.outPath);
if (!existsSync(joinPath(CONFIG.outPath, "cjs")))
  mkdirSync(joinPath(CONFIG.outPath, "cjs"));
writeFileSync(
  joinPath(CONFIG.outPath, "cjs/package.json"),
  JSON.stringify({ type: "commonjs" })
);
if (!existsSync(joinPath(CONFIG.outPath, "mjs")))
  mkdirSync(joinPath(CONFIG.outPath, "mjs"));
writeFileSync(
  joinPath(CONFIG.outPath, "mjs/package.json"),
  JSON.stringify({ type: "module" })
);

const copyFileInToDist = (n: string) => {
  writeFileSync(
    joinPath(CONFIG.distPath, n),
    readFileSync(joinPath(CONFIG.inPath, n))
  );
};

if (!existsSync(CONFIG.distPath)) mkdirSync(CONFIG.distPath);

// console.log(
//   parseUri("/lol-lobby/v2/lobby/members/{summonerId}/grant-invite", "POST")
// );
// compileFunctions2();
combine();
console.log("helps combined");

compileTypes();
console.log("types compiled");

compileFunctions2();
console.log("functions compiled");

copyFileInToDist(CONFIG.requestFile);
copyFileInToDist("index.ts");

process.exit();

// let u = "/lol-test/qqq/{puuid}/xx";
// // let args = {
// //   puuid: 666,
// //   test: 17,
// // };

// // u = applyUrlArgs(u, args);

// // console.log("works?", u, args);
// // console.log(args);

// // process.exit();

// compile();

// const data = JSON.parse(readFileSync("./script/help-combined.json").toString());

// // const namespaces: {[ns: string]: {
// //     []
// // }} = {
// //     [key of string]: x
// // }

// const unique: any[] = [];
// data.functions.forEach((f) => {
//   const base = ((f.url ?? "") as string).match(/^\/([^\/]+)\/(v\d\/)?/)?.[1];
//   if (!unique.includes(base)) unique.push(base);
// });

// console.log(unique);

// // get("/lol-lobby/v2/lobby", "POST", {
// //   queueId: 430,
// //   isCustom: false,
// // });
// // get("/async");
