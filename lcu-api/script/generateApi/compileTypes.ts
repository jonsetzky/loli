import { readFileSync, writeFileSync } from "fs";
import * as ts from "typescript";
import { prettier } from "./prettier";
import { IField, IStructType } from "./combine";
import { CONFIG2, joinPath } from "./config";
import {
  Compiler,
  createIdentifier,
  convertToValidSymbolName,
} from "./compile";

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
  f.name = convertToValidSymbolName(f.name);
  const ifPrimToTsType = (t: any) =>
    isPrimitive(t) ? primToTsType(t) : convertToValidSymbolName(t);

  let type: any = ts.factory.createTypeReferenceNode(
    ifPrimToTsType(f.type.type)
  );

  if (f.type.type === "map")
    type = ts.factory.createTypeLiteralNode([
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createComputedPropertyName(createIdentifier("key: string")),
        undefined,
        ts.factory.createTypeReferenceNode(ifPrimToTsType(f.type.elementType))
      ),
    ]);

  if (f.type.type === "vector")
    type = ts.factory.createArrayTypeNode(
      ts.factory.createTypeReferenceNode(ifPrimToTsType(f.type.elementType))
    );
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
    convertToValidSymbolName(t.name),
    undefined,
    undefined,
    t.fields.map((f) => createProperty(f))
  );

const createUnionType = (t: IStructType) =>
  ts.factory.createTypeAliasDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    convertToValidSymbolName(t.name),
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

const createType = (t: IStructType): ts.Node[] => {
  // console.log("1");
  const comment =
    t.description === ""
      ? null
      : ts.factory.createJSDocComment(
          ts.factory.createNodeArray([
            ts.factory.createJSDocText(t.description),
          ])
        );
  // console.log("2");
  const type = t.values.length > 0 ? createUnionType(t) : createInterface(t);

  return comment ? [comment, type] : [type];
};

export const compileTypes = () => {
  const compiler = new Compiler();

  let out = "";

  const data = JSON.parse(readFileSync(CONFIG2.help.combined).toString());

  data.types
    .map((t: IStructType) => createType(t))
    .forEach((t) => (out += compiler.compileList(t)));

  writeFileSync(CONFIG2.typesPath, prettier(out));
};
