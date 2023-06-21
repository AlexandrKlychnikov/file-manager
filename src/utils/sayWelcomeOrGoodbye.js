const sayWelcomeOrGoodbye = (username, homedir) => {
  process.stdout.write(`Welcome to the File Manager, ${username}!` + '\n'
    + `You are currently in ${homedir}` + '\n');

  process.on('exit', () => {
    process.stdout.write(`Thank you for using File Manager, ${username}, goodbye!`+ '\n')
  });
}

export default sayWelcomeOrGoodbye;