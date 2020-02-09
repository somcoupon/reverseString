const string = require('../string');
const reverse = string.reverse;
const report = require('../utils');
const output = report.output;

const reverseString = () => {
  const input = '0123456789abcdefghijkl';
  const out = output(reverse.reverseString, input);
  console.log(out);
}
const reverseWords = () => {
  const input = 'order1 order2 order3 order4 order5';
  const out = output(reverse.reverseWordOrder, input);
  console.log(out);
}

module.exports = {reverseString, reverseWords};