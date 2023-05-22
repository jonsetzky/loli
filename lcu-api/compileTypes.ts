import { readFileSync, writeFileSync } from "fs";
import * as ts from "typescript";
import { prettier } from "./prettier";
import { IField, IStructType } from "./combine";
import { CONFIG, joinPath } from "./config";

const primitiveTypes = [
  "int64",
  "int32",
  "string",
  "uint32",
  "vector",
  "bool",
  "object",
  "uint64",
  "double",
  "float",
  "map",
  "uint16",
  "uint8",
  "int16",
  "int8",
] as const;
type PrimitiveType = (typeof primitiveTypes)[number];
export const isPrimitive = (t: string) => primitiveTypes.includes(t as any);
export const primToTsType = (p: PrimitiveType): string => {
  if (
    [
      "int64",
      "int32",
      "uint32",
      "uint64",
      "double",
      "float",
      "uint16",
      "uint8",
      "int16",
      "int8",
    ].includes(p)
  )
    return "number";
  if (["vector"].includes(p)) return "array";
  if (["map", "object"].includes(p)) return "object";
  if (["string"].includes(p)) return "string";
  if (["bool"].includes(p)) return "boolean";
  return "unknown";
};

const createProperty = (f: IField) => {
  const ifPrimToTsType = (t: any) => (isPrimitive(t) ? primToTsType(t) : t);

  let type: any = ts.factory.createTypeReferenceNode(
    ifPrimToTsType(f.type.type)
  );
  if (f.type.type === "map")
    type = ts.factory.createTypeReferenceNode("Map", [
      ts.factory.createTypeReferenceNode("string"),
      ts.factory.createTypeReferenceNode(ifPrimToTsType(f.type.elementType)),
    ]);

  if (f.type.type === "vector")
    type = ts.factory.createArrayTypeNode(
      ts.factory.createTypeReferenceNode(ifPrimToTsType(f.type.elementType))
    );

  const hasElements = ["vector", "map"].includes(f.type.type);

  return ts.factory.createPropertySignature(
    undefined,
    '"' + f.name + '"',
    f.optional
      ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
      : undefined,
    type
  );
};

const createInterface = (t: IStructType) =>
  ts.factory.createInterfaceDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    t.name,
    undefined,
    undefined,
    t.fields.map((f) => createProperty(f))
  );

const createUnionType = (t: IStructType) =>
  ts.factory.createTypeAliasDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    t.name,
    undefined,
    // ts.factory.createtype
    // ts.factory.createTypeLiteralNode(
    //   t.values.map((v) => ts.factory.createStringLiteral(v.name))
    // )
    ts.factory.createUnionTypeNode(
      t.values.map((v) =>
        ts.factory.createTypeReferenceNode('"' + v.name + '"')
      )
    )
  );

const createType = (t: IStructType): ts.NodeArray<ts.Node> => {
  const comment =
    t.description === ""
      ? null
      : ts.factory.createJSDocComment(
          ts.factory.createNodeArray([
            ts.factory.createJSDocText(t.description),
          ])
        );
  const type = t.values.length > 0 ? createUnionType(t) : createInterface(t);

  return ts.factory.createNodeArray(comment ? [comment, type] : [type]);
};

export const compileTypes = () => {
  const file = ts.createSourceFile(
    "source.ts",
    "",
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  let out = "";

  const data = JSON.parse(readFileSync(CONFIG.helpFiles.combined).toString());
  data.types.forEach((t: IStructType) => {
    out += printer.printList(ts.ListFormat.MultiLine, createType(t), file);
  });

  writeFileSync(joinPath(CONFIG.distPath, CONFIG.typesFile), prettier(out));
};
