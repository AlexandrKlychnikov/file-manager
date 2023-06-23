import fs from 'fs';
import path from 'path';

const rn = async (dir, filePath, newFileName) => {
    const oldFile = path.resolve(dir, filePath);
    const newFile = path.resolve(path.dirname(filePath), newFileName);
    fs.rename(oldFile, newFile, function(err) {
        if ( err ) console.log('Operation failed');
    });
}

export default rn;