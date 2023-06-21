const checkProperSart = () => {
  let username = null;
  const arg  = process.argv.slice(2)[0]

  if (arg?.slice(0, 11) === '--username=') {
      username =`${ arg?.slice(11, arg?.length)}`
  }

  if (!username) {
    console.log('The program is started by npm-script start in following way:')
    console.log('\x1b[33m%s\x1b[0m', 'npm run start -- --username=your_username')
    process.exit()
  }
  return username
}

export default checkProperSart;