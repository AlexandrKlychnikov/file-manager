import fs from 'fs';
import path from 'path';
import errorCounter from './errorCounter.js';

const cp = async (dir, file, newDir) => {
    if (!file || !newDir) {
        console.log('Invalid input');
        return
    }
    const filePath = path.resolve(dir, file);
    const newFile = path.join(newDir, path.win32.basename(filePath));
    const readable = fs.createReadStream(filePath);
    const writeable = fs.createWriteStream(newFile);
    const handleError = errorCounter(dir);
    readable.on('error', () => handleError())
    writeable.on('error', () => handleError())
    readable.pipe(writeable);
}

export default cp;