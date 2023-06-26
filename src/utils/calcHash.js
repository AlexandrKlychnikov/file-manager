import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import url from 'url'
import prompt from './prompt.js';

const checksumFile = (hashName, path, dir) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash(hashName);
    const stream = fs.createReadStream(path);
    stream.on('error', err => {
      console.log('Operation failed');
      prompt(dir);
    });
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
  });
}

const calcHash = async (file, dir) => {
  const data = await checksumFile('sha256', file, dir)
  console.log(data)
};

export default calcHash;