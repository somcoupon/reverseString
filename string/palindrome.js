

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

const palinDrome = str => {
  return str
};



const input = 'race Car';

console.log(output(palinDrome, input));