// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

const eqArrays = function (array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
    return true;
  } else {
    return array1 === array2;
  }
};

//TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false); // => false

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(
//   eqArrays(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5],
//     ]
//   ),
//   false
// ); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

module.exports = eqArrays;
