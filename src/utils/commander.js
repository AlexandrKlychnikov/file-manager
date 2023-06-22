import sayGoodbye from './sayGoodBye.js';
import up from './up.js';
import cd from './cd.js'
import ls from './ls.js';

const commander = async (line, current, username) => {
  const parsedLine = line.trim().split(' ');
  const command = parsedLine[0];
  const args = [...parsedLine.slice(1)]
  switch (command) {
    case '.exit':
        sayGoodbye(username);
        process.exit()
        break;
    case 'up':
        up(current);
        break;
    case 'cd':
        await cd(current, args[0])
        break;
    case 'ls':
        await ls(current.dir)
        break;
    default:
        console.log('Invalid input');
        break;
  }
}

export default commander;
