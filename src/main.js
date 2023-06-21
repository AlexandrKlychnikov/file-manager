import { stdin, stdout } from 'process';
import os from 'os';
import checkProperSart from './utils/checkProperStart.js'
import sayWelcome from './utils/sayWelcome.js';
import sayGoodbye from './utils/sayGoodBye.js';
import readline from 'node:readline';
import commander from './utils/commander.js';
import showCurrentDir from './utils/showCurrentDir.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'print command> '
});

const username = checkProperSart();
const homedir = os.homedir();
let current = { dir: homedir };

sayWelcome(username);
showCurrentDir(homedir);
rl.prompt();

rl.on('line', async (line) => {
  await commander(line, current, username);
  showCurrentDir(current.dir)
  rl.prompt();
}).on('close', () => {
    sayGoodbye(username);
    process.exit(0);
});



