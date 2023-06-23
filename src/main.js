import { stdin, stdout } from 'process';
import os from 'os';
import checkProperSart from './utils/checkProperStart.js'
import sayWelcome from './utils/sayWelcome.js';
import sayGoodbye from './utils/sayGoodBye.js';
import readline from 'node:readline';
import commander from './utils/commander.js';
import showCurrentDir from './utils/showCurrentDir.js';

const username = checkProperSart();
const homedir = os.homedir();
let current = { dir: homedir };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: showCurrentDir(homedir)
});

sayWelcome(username);
rl.prompt();

rl.on('line', async (line) => {
  await commander(line, current, username, rl);
  rl.setPrompt(showCurrentDir(current.dir));
  rl.prompt();
}).on('close', () => {
    sayGoodbye(username);
    process.exit(0);
});



