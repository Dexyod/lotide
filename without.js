const assertArraysEqual = require("./assertArraysEqual");

//FUNCTION IMPLEMENTATION.
const without = function (source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

//TEST CODE
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
