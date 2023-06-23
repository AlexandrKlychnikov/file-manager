import fs from 'fs';
import path from 'path';

const cat = async (dir, file) => {
    const filePath = path.resolve(dir, file);
    const stream = fs.createReadStream(filePath);

    const print = async (readable) => {
       readable.setEncoding('utf8');
       let data = '';
       for await (const chunk of readable) {
         data += chunk;
       }
       console.log(data);
    }

     await print(fs.createReadStream(filePath)).catch(console.error);

}

export default cat;