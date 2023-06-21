import path from 'path';

const showCurrentDir = (dir) => {
  const dirPath = dir.split(path.sep).join('/');
  process.stdout.write(`You are currently in ${dirPath}` + '\n');
}

export default showCurrentDir;
