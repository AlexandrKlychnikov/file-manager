import { stdin, stdout } from 'process';
import os from 'os';
import checkProperSart from './utils/checkProperStart.js'
import sayWelcome from './utils/sayWelcome.js';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'print command> '
});

const username = checkProperSart();
const homedir = os.homedir();
sayWelcome(username, homedir);

rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case 'SIGINT':
            process.exit()
            break;
        case '.exit':
            process.exit()
            break;
        case 'yes':
            console.log('It works!')
            break;
        default:
            console.log('Invalid input');
            break;
    }
    rl.prompt();
}).on('close', () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
    process.exit(0);
});



