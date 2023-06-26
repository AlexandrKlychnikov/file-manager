import zlib from 'zlib';
import fs from 'fs';
import prompt from './prompt.js';
import handleError from './handleError.js';

const decompress = (filePath, pathToDestination, dir) => {
  return new Promise((resolve, reject) => {
    const decompress = zlib.createBrotliDecompress();
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(pathToDestination);

    input.on('error', () => {
      handleError(dir)
    });

    input.pipe(decompress).pipe(output);
    output.on('finish', () => {
      resolve();
    });
    output.on('error', () => {
      handleError(dir)
    });
    decompress.on('error', () => {
      handleError(dir)
    } )
  });
}

export default decompress;