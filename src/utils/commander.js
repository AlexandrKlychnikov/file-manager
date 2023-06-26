import sayGoodbye from './sayGoodBye.js';
import up from './up.js';
import cd from './cd.js'
import ls from './ls.js';
import cat from './cat.js';
import add from './add.js';
import rn from './rn.js';
import cp from './cp.js';
import rm from './rm.js';
import mv from './mv.js';
import operSys from './os.js';
import calcHash from './calcHash.js';
import compress from './compress.js';
import decompress from './decompress.js';

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
    case 'cat':
        await cat(current.dir, args[0])
        break;
    case 'add':
        await add(current.dir, args[0])
        break;
    case 'rn':
        await rn(current.dir, args[0], args[1])
        break;
    case 'cp':
        await cp(current.dir, args[0], args[1])
        break;
    case 'mv':
        await mv(current.dir, args[0], args[1])
        break;
    case 'rm':
        await rm(args[0])
        break;
    case 'os':
        await operSys(args[0])
        break;
    case 'hash':
        await calcHash(args[0], current.dir)
        break;
    case 'compress':
        await compress(args[0], args[1], current.dir)
        break;
    case 'decompress':
        await decompress(args[0], args[1], current.dir)
        break;
    default:
        console.log('Invalid input');
        break;
  }
}

export default commander;
