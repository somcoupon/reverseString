const reverseString = str => {
  // const arr = str.split(''),
  // reversedArr = arr.reverse(),
  // reversedStr = reversedArr.join('');
  // return reversedStr;

  return str.split('').reverse().join('');
};

const reverseWordOrder = str => {
  // const wordArr = str.split(' '),
  // reversedWordArr = wordArr.reverse(),
  // reversedWords = reversedWordArr.join(' ');
  // return reversedWords;

  return str.split(' ').reverse().join(' ');ß
}

module.exports = {reverseString,reverseWordOrder};