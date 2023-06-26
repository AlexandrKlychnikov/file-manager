import path from 'path';
import isDirectory from './isDirectory.js';

const cd = async(current, newpath) => {

  const newCurrentDir = path.resolve(current.dir, newpath);

  if (await isDirectory(newCurrentDir)) {
    current.dir = newCurrentDir;
  } else {
    console.error('Operation failed')
  }

}

export default cd;