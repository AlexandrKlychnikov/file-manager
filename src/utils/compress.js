import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import prompt from './prompt.js';
import handleError from './handleError.js';

const compress = async(filePath, pathToDestination, dir) => {
  return new Promise((resolve, reject) => {
    const compress = zlib.createBrotliCompress();
    const input = fs.createReadStream(filePath);
    const zipExt = path.extname(pathToDestination) === '.br' ? '' : '.br'
    const output = fs.createWriteStream(pathToDestination + zipExt);
    input.on('error', err => {
      handleError(dir)
    });

    input.pipe(compress).pipe(output);
    output.on('finish', () => {
      resolve();
    });
    output.on('error', err => {
      handleError(dir)
    });
    compress.on('error', () => {
      handleError(dir)
    } )
  });
}

export default compress;