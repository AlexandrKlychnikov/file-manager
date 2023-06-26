const sayWelcome = (username) => {
  process.stdout.write(`Welcome to the File Manager, ${username}!` + '\n' + '\n');
}

export default sayWelcome;