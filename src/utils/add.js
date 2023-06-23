import fs from 'fs';
import path from 'path';

const add = async (dir, newFile) => {
    const file = path.resolve(dir, newFile);
    fs.writeFile(
      file,
      '',
      (err) => {
        if (err) throw err;
    });
}

export default add;