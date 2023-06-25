import os from 'os';

const operSys = async (arg) => {
  const methods = {
    '--EOL': JSON.stringify(os.EOL),
    '--cpus': () => {
      const cpus = os.cpus();
      return `overall amount of CPUS: ${cpus.length} \n${cpus.map((e, i) => {
        return `${i + 1}. model: ${e.model} speed: ${(e.speed / 1000).toFixed(1)} GHz` + '\n'
      }).join('')}`
    },
    '--homedir': os.homedir,
    "--username": () => os.userInfo().username,
    "--architecture": os.arch,
  }
  const data = methods[arg]?.();

  if (data) {
    console.log(data);
  } else {
    console.error('Invalid input')
  }

}

export default operSys;