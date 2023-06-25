import showCurrentDir from "./showCurrentDir.js"


const errorHandler = (dir) => {
  let counter = 0
  return () => {
    if (!counter) {
      console.error('Operation failed')
      process.stdout.write(showCurrentDir(dir))
    }
    counter++
  }
}

export default errorHandler;