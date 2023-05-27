import { compileFromFile } from "json-schema-to-typescript";
import * as ts from "typescript";
import {
  IField,
  IFunction,
  IFunctionArgument,
  IStructType,
  IType,
  getCombinedHelp,
} from "./combine";
import { writeFileSync } from "fs";
import { isPrimitive, primToTsType } from "./compileTypes";
import { CONFIG2, joinPath } from "./config";
import {
  Compiler,
  convertToValidSymbolName,
  createIdentifier,
} from "./compile";

const createTypeNodeFromType = (t: IType): ts.TypeNode => {
  const ifPrimToTsType = (t: any) => (isPrimitive(t) ? primToTsType(t) : t);
  if (t.type === "map")
    return ts.factory.createTypeReferenceNode("Map", [
      ts.factory.createTypeReferenceNode("string"),
      ts.factory.createTypeReferenceNode(ifPrimToTsType(t.elementType)),
    ]);

  if (t.type === "vector")
    return ts.factory.createArrayTypeNode(
      ts.factory.createTypeReferenceNode(ifPrimToTsType(t.elementType))
    );

  return ts.factory.createTypeReferenceNode(ifPrimToTsType(t.type));
};

const parsePositionalArguments = (uri: string): string[] => {
  let positionalArgs: string[] = [];
  let u = uri;
  let m = u.match(/\/\{([\S]+?)\}/);
  let [mf, mn] = [m?.at(0), m?.at(1)];
  while (mf && mn) {
    positionalArgs.push(mn.replace("+path", "path"));
    u = u.replace(mf, "");
    m = u.match(/\/\{([\S]+?)\}/);
    [mf, mn] = [m?.at(0), m?.at(1)];
  }
  return positionalArgs;
};

interface TypeProps {
  positionalArgs: string[];
  namespace?: string;
  subNamespace?: string;
  method: string;
}

const upperFirstCharacter = (str: string) =>
  str.at(0)?.toUpperCase() + str.substring(1);

const parseNamespaces = (
  uri: string,
  http_method: string
): { namespace?: string; subNamespace?: string; method: string } => {
  //   console.log(uri);
  const m = uri.match(/^(?:\/([^\/]+))?(?:\/v\d)?(?:\/(.+))?(?:\/([^\/]+))$/);
  const namespace = m
    ?.at(1)
    ?.replace(/[^a-zA-Z0-9_$]/g, "_")
    .replace("lol_", "");
  const subNamespace = m?.at(2)?.replace(/[^a-zA-Z0-9_$]/g, "_");

  let method = convertToValidSymbolName(m?.at(3) ?? "");

  method = http_method.toLowerCase() + upperFirstCharacter(method);
  if (method.length < 1) console.error("error parsing", uri);
  //   console.log(uri);
  return { namespace, subNamespace, method };
};

const parseUri = (uri: string, http_method: string): TypeProps => {
  let positionalArgs: string[] = parsePositionalArguments(uri);
  let u = uri;
  positionalArgs.forEach((a) => {
    u = u.replace(`/{${a}}`, "");
  });

  const out: TypeProps = {
    positionalArgs,
    ...parseNamespaces(u, http_method),
  };

  const lastArg = positionalArgs.at(-1);
  if (lastArg)
    out.method += convertToValidSymbolName(`By${upperFirstCharacter(lastArg)}`);

  return out;
};

const createImportStatement = (
  imports: string[],
  file: string,
  typeOnly: boolean = false
) =>
  ts.factory.createImportDeclaration(
    undefined,
    ts.factory.createImportClause(
      typeOnly,
      undefined,
      ts.factory.createNamedImports(
        imports.map((i) =>
          ts.factory.createImportSpecifier(
            false,
            undefined,
            createIdentifier(i)
          )
        )
      )
    ),
    ts.factory.createStringLiteral(file.replace(/(?<!.d).ts/, ""))
  );

const createFunctionUrl = (url: string, args: IFunctionArgument[]) => {
  let u = url.replace("{+path}", "{path}");
  args.forEach((a) => {
    const sn = convertToValidSymbolName(a.name);
    u = u.replace("{" + a.name + "}", "${" + sn + "}");
  });
  return u;
};

const createParameter = (
  name: string,
  optional: boolean,
  type: IType | string
) =>
  ts.factory.createParameterDeclaration(
    undefined,
    undefined,
    createIdentifier(name, true),
    optional ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
    typeof type === "string"
      ? ts.factory.createTypeReferenceNode(type)
      : type.type.length > 0
      ? createTypeNodeFromType(type)
      : ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
    undefined
  );

const createFunctionNode = (f: IFunction) => {
  const p = parseUri(f.url, f.http_method);
  const nonPosArgs = f.arguments.filter(
    (a) => !p.positionalArgs.includes(a.name)
  );

  return ts.factory.createFunctionDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    undefined,
    p.method,
    undefined,
    [
      createParameter("connector", false, "ILCUConnector"),
      ...f.arguments.map((a) => createParameter(a.name, a.optional, a.type)),
    ],
    f.returns.type.length > 0
      ? ts.factory.createTypeReferenceNode("ILCUResult", [
          createTypeNodeFromType(f.returns),
        ])
      : undefined,

    ts.factory.createBlock(
      [
        ts.factory.createReturnStatement(
          ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(
              createIdentifier("connector"),
              "request"
            ),
            undefined,
            [
              createIdentifier(
                "`" + createFunctionUrl(f.url, f.arguments) + "`"
              ),
              ts.factory.createStringLiteral(f.http_method.toUpperCase()),
              nonPosArgs.length === 1
                ? createIdentifier(nonPosArgs[0].name, true)
                : ts.factory.createObjectLiteralExpression(
                    nonPosArgs.map((a) =>
                      convertToValidSymbolName(a.name) === a.name
                        ? (createIdentifier(a.name) as any)
                        : ts.factory.createPropertyAssignment(
                            ts.factory.createStringLiteral(a.name),
                            createIdentifier(a.name, true)
                          )
                    )
                  ),
            ]
          )
        ),
      ],
      false
    )
  );
};

const createNamespaceNode = (
  name: string,
  ns: { [key: string]: { [k: string]: any } | IFunction }
) => {
  return ts.factory.createModuleDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    createIdentifier(name),
    ts.factory.createModuleBlock(
      Object.entries(ns)
        // .filter(([n, v]) => v.name !== undefined)
        .map(([n, v]) => createNamespaceOrFunctionNode(n, v as any))
    ),
    ts.NodeFlags.Namespace
  );
};

const createNamespaceOrFunctionNode = (
  name: string,
  data: { [key: string]: { [k: string]: any } | IFunction }
) => {
  if (Object.keys(data).includes("name"))
    return createFunctionNode(data as any);
  return createNamespaceNode(name, data);
};

export const compileFunctions2 = () => {
  const compiler = new Compiler();

  const namespaceHierarchy: any = {};
  const _d: any = getCombinedHelp();
  _d.functions
    .filter((f: any) => f.url && f.http_method)
    .forEach((f: any) => {
      const fp = parseUri(f.url, f.http_method);
      const ns = fp.namespace;
      const sns = fp.subNamespace;
      const m = fp.method;
      if (!ns) return (namespaceHierarchy[fp.method] = f);
      if (!namespaceHierarchy[ns]) namespaceHierarchy[ns] = {};
      if (!sns) return (namespaceHierarchy[ns][fp.method] = f);
      if (!namespaceHierarchy[ns][sns]) namespaceHierarchy[ns][sns] = {};
      namespaceHierarchy[ns][sns][m] = f;
    });
  writeFileSync(
    joinPath(CONFIG2.helpPath, "functions-hierarchy.json"),
    JSON.stringify(namespaceHierarchy)
  );

  let out = "";
  out +=
    compiler.compileNode(
      createImportStatement(
        _d.types.map((t: any) => t.name),
        CONFIG2.typesImport,
        true
      )
    ) + "\n";

  out +=
    compiler.compileNode(
      createImportStatement(
        ["ILCUConnector", "ILCUResult"],
        CONFIG2.connectorImport,
        true
      )
    ) + "\n";

  Object.entries(namespaceHierarchy).forEach(([ns, data]) => {
    out +=
      compiler.compileNode(createNamespaceOrFunctionNode(ns, data as any)) +
      "\n";
  });

  writeFileSync(CONFIG2.functionsPath, out);
  return;
};
