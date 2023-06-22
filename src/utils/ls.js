import fs from 'fs/promises';

const ls = async(dir) => {

  const fileArr = [];
  const dirArr = [];

  try {
      const entities = await fs.readdir(dir, {withFileTypes: true});
      for(let ent of entities){
          if (ent.isFile()) {
              fileArr.push({ name: ent.name, type: 'file' })
          } else if (ent.isDirectory()) {
              dirArr.push({ name: ent.name, type: 'directory' })
          }
      }
  } catch (err) {
      throw new Error('Operation failed');
  }
  fileArr.sort();
  dirArr.sort();
  const output = [...dirArr, ...fileArr]
  console.table(output);
}

export default ls;