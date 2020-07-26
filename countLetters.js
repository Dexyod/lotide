//TEST/ASSERTION FUNCTIONS
const assertEqual = require("./assertEqual");

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
//TEST CODE
// const result1 = countLetters("LHL");
// assertEqual(result1["l"], 2);
// assertEqual(result1["h"], 1);

// const result2 = countLetters("lighthouse in the house");

// assertEqual(result2["l"], 1);
// assertEqual(result2["i"], 2);
// assertEqual(result2["g"], 1);
// assertEqual(result2["h"], 4);
// assertEqual(result2["t"], 2);
// assertEqual(result2["o"], 2);
// assertEqual(result2["u"], 2);
// assertEqual(result2["s"], 2);
// assertEqual(result2["e"], 3);
// assertEqual(result2["n"], 1);
module.exports = countLetters;
