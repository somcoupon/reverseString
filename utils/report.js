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

module.exports = {output}