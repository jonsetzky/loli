import { Compiler } from "./compile";
import * as ts from "typescript";
import { CONFIG2 } from "./config";
import { writeFileSync } from "fs";

export const compileIndex = () => {
  const compiler = new Compiler();

  let out = "";

  [CONFIG2.functionsImport, CONFIG2.typesImport].forEach(
    (i) =>
      (out +=
        compiler.compileNode(
          ts.factory.createExportDeclaration(
            undefined,
            false,
            undefined,
            ts.factory.createStringLiteral(i),
            undefined
          )
        ) + "\n")
  );
  writeFileSync(CONFIG2.indexPath, out);
};
