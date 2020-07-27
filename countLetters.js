// ACTUAL FUNCTION IMPLEMENTATION
const countLetters = function (str) {
  const result = {};
  const string = str.toLowerCase();
  for (let char of string) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
};

module.exports = countLetters;
