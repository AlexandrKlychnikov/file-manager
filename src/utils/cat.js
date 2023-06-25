import fs from 'fs';
import path from 'path';

const cat = async (dir, file) => {
    const filePath = path.resolve(dir, file);

    const print = async (readable) => {
      try {
        readable.setEncoding('utf8');
        let data = '';
        for await (const chunk of readable) {
          data += chunk;
        }
        console.log(data);
      } catch {
        console.error('Operation failed');
      }
    }

     await print(fs.createReadStream(filePath));

}

export default cat;