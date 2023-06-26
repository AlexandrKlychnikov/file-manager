import prompt from "./prompt.js";

const handleError = (dir) => {
  console.error('Operation failed');
  prompt(dir);
}

export default handleError;
