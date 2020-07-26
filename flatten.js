const assertArraysEqual = require("./assertArraysEqual");

const flatten = function (array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let nextValue = array[i];
    if (Array.isArray(nextValue)) {
      for (let j = 0; j < nextValue.length; j++) {
        result.push(nextValue[j]);
      }
    } else {
      result.push(nextValue);
    }
  }
  return result;
};

//TEST CODE
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, [3, 5], [4], 5, [6, 7]]));
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
module.exports = flatten;
