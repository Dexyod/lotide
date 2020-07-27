const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");
//TEST CODE
assertArraysEqual(flatten([1, 2, [3, 5], [4], 5, [6, 7]]), [
  1,
  2,
  3,
  5,
  4,
  5,
  6,
  7,
]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
