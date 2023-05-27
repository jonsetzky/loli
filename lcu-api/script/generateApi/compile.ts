import * as ts from "typescript";

export class Compiler {
  readonly file: ts.SourceFile;
  readonly printer: ts.Printer;

  constructor() {
    this.file = ts.createSourceFile(
      "source.ts",
      "",
      ts.ScriptTarget.ESNext,
      false,
      ts.ScriptKind.TS
    );
    this.printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  }

  compileNode = (node: ts.Node) =>
    this.printer.printNode(ts.EmitHint.Unspecified, node, this.file);

  compileList = (nodeList: ts.Node[]) =>
    this.printer.printList(
      ts.ListFormat.MultiLine,
      ts.factory.createNodeArray(nodeList, undefined),
      this.file
    );
}

export const convertToValidSymbolName = (input: string): string => {
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

export const createIdentifier = (s: string, sanitize: boolean = false) =>
  sanitize
    ? ts.factory.createIdentifier(convertToValidSymbolName(s))
    : ts.factory.createIdentifier(s);
