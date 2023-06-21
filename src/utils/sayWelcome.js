const sayWelcome = (username, homedir) => {
  process.stdout.write(`Welcome to the File Manager, ${username}!` + '\n'
    + '\n' + `You are currently in ${homedir}` + '\n');
}

export default sayWelcome;