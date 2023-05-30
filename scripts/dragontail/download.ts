import * as fs from "fs";
import * as stream from "stream";
import { promisify } from "util";
import axios from "axios";
import cliProgress from "cli-progress";
import { pipeline } from "stream";
import * as zlib from "zlib";
import * as tar from "tar-fs";

export const downloadTgz = async (
  fileUrl: string,
  outputLocationPath: string
) => {
  const size = (await axios.head(fileUrl)).headers["content-length"];

  const multibar = new cliProgress.MultiBar(
    {
      clearOnComplete: true,
      hideCursor: true,
      format: "{title} | {bar} | {value}/{total}",
    },
    cliProgress.Presets.shades_classic
  );

  const dlBar = multibar.create(size, 0, { title: "Download" });
  let downloadedSize = 0;

  const gz = zlib.createGunzip();

  const ex = tar.extract(outputLocationPath);

  return new Promise<void>((resolve, reject) => {
    return axios({
      method: "get",
      url: fileUrl,
      responseType: "stream",
    }).then(async (response) => {
      const s = response.data as stream;
      s.on("data", (chunk) => {
        downloadedSize += chunk.length;
        dlBar.update(downloadedSize);
      })
        .pipe(gz)
        .pipe(ex)
        .on("finish", () => {
          dlBar.stop();
          multibar.stop();
          resolve();
        });
    });
  });
};
