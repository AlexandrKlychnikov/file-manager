import { stdin, stdout } from 'process';
import os from 'os';
import checkProperSart from './utils/checkProperStart.js'
import sayWelcomeOrGoodbye from './utils/sayWelcomeOrGoodbye.js';

const username = checkProperSart();
const homedir = os.homedir();
sayWelcomeOrGoodbye(username, homedir);
process.on('SIGINT', () => process.exit());

stdin.on('data', data => {
  if (data.toString().slice(0, data.toString().indexOf('\n') - 1) === '.exit') process.exit();
});