import path from "path";
import * as fs from "fs";

const ensureDir = (p: string) => {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
};

export const setup = (dir: string) => {
  const d = (...args: any[]) => path.join(dir, ...args);
  ensureDir(d("dragontail"));
  ensureDir(d("public/dragontail/img"));
  ensureDir(d("src/assets/dragontail/data"));
  fs.writeFileSync(d("dragontail", "version"), "");
};

if (require.main === module) {
  setup(".");
}
