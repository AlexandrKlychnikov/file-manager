import path from 'path';

const showCurrentDir = (dir) => {
  const dirPath = dir.split(path.sep).join('/');
  return `You are currently in ${dirPath}> `;
}

export default showCurrentDir;
