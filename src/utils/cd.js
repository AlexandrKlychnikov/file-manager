import path from 'path';
import { access, constants } from 'node:fs/promises';
import isDirectory from './isDirectory.js';

const cd = async(current, newpath) => {

  const newCurrentDir = path.resolve(current.dir, newpath);

  if (await isDirectory(newCurrentDir)) {
    current.dir = newCurrentDir;
  }

}

export default cd;