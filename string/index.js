const echo = str => console.log(str);
const echoX = str => console.log(str);
const output = (cb, str)=>{
  const out = cb(str);
  const display =
  `
  ..........
  operation: ${cb.name}
  input: ${str}
  output: ${out}

  `
return display;
}

const reverse = require('./reverse');
module.exports = {echo, echoX, output, reverse};