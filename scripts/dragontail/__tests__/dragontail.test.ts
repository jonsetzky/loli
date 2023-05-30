import { DragontailVersion, getDragontailUrlByVersion } from "../dragontail";

describe("dragontail", () => {
  describe("dragontail#getDragontailUrlByVersion", () => {
    const t = (input: DragontailVersion, expectedOutput: string) => {
      expect(getDragontailUrlByVersion(input)).toBe(expectedOutput);
    };
    it("works on a singular test case", () => {
      t(
        "13.2.4",
        "https://ddragon.leagueoflegends.com/cdn/dragontail-13.2.4.tgz"
      );
    });
  });
});
