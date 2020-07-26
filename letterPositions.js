//TEST/ASSERTION FUNCTION
const assertArraysEqual = require("./assertArraysEqual");

// ACTUAL FUNCTION
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (char in sentence) {
    let index = Number(char);
    if (!results[sentence[index]]) {
      results[sentence[index]] = [index];
    } else {
      results[sentence[index]].push(index);
    }
  }
  return results;
};

//TEST CODE
// const result1 = letterPositions("hello");
// assertArraysEqual(result1["h"], [0]);
// assertArraysEqual(result1["e"], [1]);
// assertArraysEqual(result1["l"], [2, 3]);
// assertArraysEqual(result1["o"], [4]);
module.exports = letterPositions;
