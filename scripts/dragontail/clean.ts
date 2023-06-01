import { rmSync } from "fs";
import path from "path";

export const rmrf = (dir: string) =>
  rmSync(dir, { recursive: true, force: true });

export const cleanup = (dir: string) => {
  const d = (...args: any[]) => path.join(dir, ...args);

  rmrf(d("dragontail"));
  rmrf(d("public/dragontail"));
  rmrf(d("src/assets/dragontail"));
};

if (require.main === module) {
  cleanup(".");
}
