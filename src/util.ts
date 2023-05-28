export const sortText = <T = undefined>(
  ...[priority, map]: T extends string
    ? [string[], ((i: T) => string)?]
    : [string[], (i: T) => string]
): /** Priority order of strings, first is most important */
((a: T, b: T) => number) => {
  return (a, b) => {
    const m = (x: T): string => (map ? map(x) : (x as string));

    // return value: smaller is more important
    const n = (x: string) => {
      const i = priority.indexOf(x);
      return priority.length - (i < 0 ? priority.length : i);
    };

    const nm = (x: T) => n(m(x));

    return nm(b) - nm(a);
  };
};
