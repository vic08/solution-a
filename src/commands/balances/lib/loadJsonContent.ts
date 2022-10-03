import { createReadStream, stat } from "fs";
import { parser } from "stream-json";
import { chain } from "stream-chain";
import path from "path";
import { streamArray } from "stream-json/streamers/StreamArray";

export const loadJsonContent = (
  filePath: string
): Promise<NodeJS.ReadableStream> => {
  return new Promise<NodeJS.ReadableStream>((resolve, reject) => {
    const targetPath = path.resolve(filePath);

    const processTargetFile = () => {
      const pipeline = chain([
        createReadStream(targetPath),
        parser(),
        streamArray(),
      ]);

      resolve(pipeline);
    };

    stat(targetPath, (err) => {
      if (err === null) {
        processTargetFile();
      } else {
        reject(
          new Error(
            `Can't access ${targetPath} . Error: ${err.code}. ${err.message}`
          )
        );
      }
    });
  });
};
