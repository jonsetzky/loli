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
import { CONFIG, joinPath } from "./config";

const convertToValidSymbolName = (input: string): string => {
  // Replace invalid characters with underscores
  const sanitized = input.replace(/[^a-zA-Z0-9_$]/g, "@&_");

  // Convert to camel case
  const parts = sanitized.split("@&_");
  const camelCaseParts = parts.map((part, index) => {
    if (index === 0) {
      return part;
    }
    return part.charAt(0).toUpperCase() + part.slice(1);
  });

  return camelCaseParts.join("");
};

const createIdentifier = (s: string, sanitize: boolean = false) =>
  sanitize
    ? ts.factory.createIdentifier(convertToValidSymbolName(s))
    : ts.factory.createIdentifier(s);

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
    positionalArgs.push(mn);
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
  method =
    http_method.toLowerCase() + method[0].toUpperCase() + method.substring(1);
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

  return {
    positionalArgs,
    ...parseNamespaces(u, http_method),
  };
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
export const compileFunctions2 = () => {
  const o: any = {};

  const _d: any = getCombinedHelp();
  const d: TypeProps[] = _d.functions
    .filter((f: any) => f.url && f.http_method)
    .forEach((f: any) => {
      const fp = parseUri(f.url, f.http_method);
      const ns = fp.namespace;
      const sns = fp.subNamespace;
      const m = fp.method;
      if (!ns) return (o[fp.method] = f);
      if (!o[ns]) o[ns] = {};
      if (!sns) return (o[ns][fp.method] = f);
      if (!o[ns][sns]) o[ns][sns] = {};
      o[ns][sns][m] = f;
    });

  const file = ts.createSourceFile(
    "source.ts",
    "",
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const createFunctionUrl = (url: string, args: IFunctionArgument[]) => {
    let u = url.replace("{+path}", "{path}");
    args.forEach((a) => {
      const sn = convertToValidSymbolName(a.name);
      u = u.replace("{" + a.name + "}", "${" + sn + "}");
    });
    return u;
  };

  const createFunctionNode = (f: IFunction) => {
    const p = parseUri(f.url, f.http_method);

    ts.factory.createCallExpression(
      createIdentifier("_request"),
      undefined,
      undefined
    );

    return ts.factory.createFunctionDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      undefined,
      p.method,
      undefined,
      f.arguments.map((a) =>
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          convertToValidSymbolName(a.name),
          a.optional
            ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
            : undefined,
          a.type.type.length > 0
            ? createTypeNodeFromType(a.type)
            : ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
          undefined
        )
      ),
      f.returns.type.length > 0 ? createTypeNodeFromType(f.returns) : undefined,
      ts.factory.createBlock(
        [
          ts.factory.createReturnStatement(
            ts.factory.createCallExpression(
              createIdentifier("_request"),
              undefined,
              [
                createIdentifier(
                  "`" + createFunctionUrl(f.url, f.arguments) + "`"
                ),
                ts.factory.createStringLiteral(f.http_method.toUpperCase()),
                ts.factory.createObjectLiteralExpression(
                  f.arguments
                    .filter((a) => !p.positionalArgs.includes(a.name))
                    .map((a) =>
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
      ts.factory.createIdentifier(name),
      ts.factory.createModuleBlock(
        Object.entries(ns)
          .filter(([n, v]) => v.name !== undefined)
          .map(([n, v]) => createFunctionNode(v as any))
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

  let out = "";

  out += printer.printNode(
    ts.EmitHint.Unspecified,
    createImportStatement(
      _d.types.map((t: any) => t.name),
      "./" + CONFIG.typesFile,
      true
    ),
    file
  );

  out += printer.printNode(
    ts.EmitHint.Unspecified,
    createImportStatement(["_request"], "./" + CONFIG.requestFile),
    file
  );

  Object.entries(o).forEach(([ns, data]) => {
    out +=
      printer.printNode(
        ts.EmitHint.Unspecified,
        createNamespaceOrFunctionNode(ns, data as any),
        file
      ) + "\n";
  });

  writeFileSync(joinPath(CONFIG.distPath, CONFIG.functionsFile), out);
  return;
};
