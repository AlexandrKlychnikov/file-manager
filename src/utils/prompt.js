import showCurrentDir from './showCurrentDir.js';

const prompt = (dir) => {
  process.stdout.write(showCurrentDir(dir))
}

export default prompt;