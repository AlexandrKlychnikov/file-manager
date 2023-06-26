import path from 'path';

const up = (current) => {
  current.dir = path.dirname(current.dir);
}

export default up;