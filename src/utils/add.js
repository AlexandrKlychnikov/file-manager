import fs from 'fs';
import path from 'path';
import handleError from './handleError.js';
import prompt from './prompt.js';

const add = async (dir, newFile) => {
    if (!newFile) {
      console.log('Invalid input');
      return
    }
    const file = path.resolve(dir, newFile);
    fs.writeFile(
      file,
      '',
      (err) => {
        if (err) {
          console.error('\nOperation failed')
          prompt(dir);
        };
    });
}

export default add;