import { readFile, readFileSync, writeFileSync } from "fs";
import { CONFIG2 } from "./config";
import { convertToValidSymbolName } from "./compile";

export interface IType {
  elementType: string;
  type: string;
}

export interface IEvent {
  description: string;
  name: string;
  tags: string[];
  type: IType;
}

export interface IFunctionArgument {
  description: string;
  name: string;
  optional: boolean;
  type: IType;
}

export interface IFunction {
  // help-full
  arguments: IFunctionArgument[];
  description: string;
  help: string;
  name: string;
  returns: IType;
  tags: string[];

  // help-console
  http_method: string;
  url: string;
}

export interface IField {
  description: string;
  name: string;
  //offset: number;
  optional: boolean;
  type: IType;
}

export interface IValue {
  description: string;
  name: string;
  value: number;
}

export interface IStructType {
  description: string;
  fields: IField[];
  name: string;
  tags: string[];
  // if this is set its an enum type
  values: IValue[];
}

export interface IHelp {
  events: IEvent[];
  functions: IFunction[];
  types: IStructType[];
}

const sanitizeType = (t: IType): IType => ({
  type: convertToValidSymbolName(t.type),
  elementType: convertToValidSymbolName(t.elementType),
});

//o: T[], qual: (e: T) => Q
const removeDuplicates = <T>(o: T[], qual?: (e: T) => any) => {
  const unique: any[] = [];
  return o.filter((e) => {
    const qe = qual ? qual(e) : e;
    if (unique.includes(qe)) return false;
    unique.push(qe);
    return true;
  });
};

export const combine = () => {
  /**
   * Function information is better in the console. Other fields in
   * console are not as great as they are in full help.
   */
  const fullHelp = JSON.parse(readFileSync(CONFIG2.help.full).toString());
  const consoleHelp = JSON.parse(readFileSync(CONFIG2.help.console).toString());

  const help: IHelp = {
    events: [],
    functions: [],
    types: [],
  } as any;

  let helpFunctionsMatch = true;
  Object.entries(consoleHelp.functions).forEach(
    ([aName, a]: [string, any], i) => {
      if (!helpFunctionsMatch) return;
      const b = fullHelp.functions[i];
      if (aName != b.name) helpFunctionsMatch = false;
      help.functions.push({
        arguments: b.arguments.map(
          (a: IFunctionArgument) =>
            <IFunctionArgument>{
              ...a,
              type: sanitizeType(a.type),
            }
        ),
        description: b.description,
        help: b.help,
        name: convertToValidSymbolName(aName),
        returns: sanitizeType(b.returns),
        tags: b.tags,
        http_method: a.http_method,
        url: a.url,
      });
    }
  );
  if (!helpFunctionsMatch) {
    console.error("quitting, helps' functions don't match");
    process.exit();
  }

  fullHelp.events.forEach((e: any) => {
    help.events.push({
      description: e.description,
      name: convertToValidSymbolName(e.name),
      tags: e.tags,
      type: sanitizeType(e.type),
    });
  });

  fullHelp.types.forEach((e: any) => {
    help.types.push({
      description: e.description,
      name: convertToValidSymbolName(e.name),
      tags: e.tags,
      fields: removeDuplicates(e.fields, (e: IField) => e.name),
      values: e.values,
    });
  });

  return writeFileSync(CONFIG2.help.combined, JSON.stringify(help));
};

export const getCombinedHelp = () => {
  return JSON.parse(readFileSync(CONFIG2.help.combined).toString());
};
