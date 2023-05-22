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
