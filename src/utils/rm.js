import fs from 'fs/promises';
import path from 'path';

const rm = async (filePath) => {
    const fileToRemove = path.resolve(filePath);
    try {
        await fs.rm(fileToRemove);
    } catch (err) {
        console.error('Operation failed');
    }
};

export default rm;