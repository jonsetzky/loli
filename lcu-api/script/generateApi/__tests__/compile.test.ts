import * as compile from "../compile";

const isValid = (str: string): boolean => !str.match(/[^a-zA-Z0-9_$]/g);

describe("compile", () => {
  describe("compile#convertToValidSymbolName()", () => {
    it("should return a valid symbol name", () => {
      const t = (invalid: string, valid: string) =>
        expect(compile.convertToValidSymbolName(invalid)).toEqual(valid);

      t("abc-def", "abcDef");
      t("abcdef-", "abcdef");
      t("abcdef", "abcdef");
      t("a----", "a");
      t("qqqiw€@£@£", "qqqiw");
      t("a&b", "aB");
    });
  });
});
