import path from 'path';
import isDirectory from './isDirectory.js';

const cd = async(current, newpath) => {
  if (!newpath) {
    console.log('Invalid input');
    return
  }

  const newCurrentDir = path.resolve(current.dir, newpath);

  if (await isDirectory(newCurrentDir)) {
    current.dir = newCurrentDir;
  }

}

export default cd;