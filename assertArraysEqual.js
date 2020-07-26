// FUNCTION IMPLEMENTATION
const eqArrays = require("./eqArrays");

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// assertArraysEqual([1, "2", 3], [1, 2, 3]);

module.exports = assertArraysEqual;
