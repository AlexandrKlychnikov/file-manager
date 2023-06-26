import fs from 'fs/promises';
import path from 'path';

const rm = async (dir, filePath) => {
    if (!filePath) {
        console.log('Invalid input');
        return
    }
    const fileToRemove = path.resolve(dir, filePath);
    try {
        await fs.rm(fileToRemove);
    } catch (err) {
        console.error('Operation failed');
    }
};

export default rm;