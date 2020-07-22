//TEST/ASSERTION FUNCTIONS
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const middle = function (array) {
  let result = [];
  let middle = 0;

  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    middle = Math.floor((array.length - 1) / 2);
    result = array.splice(middle, 2);
  } else if (!array.length % 2 === 0) {
    middle = Math.floor(array.length / 2);
    result = array.splice(middle, 1);
  }
  return result;
};

//TEST CODE
console.log(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
