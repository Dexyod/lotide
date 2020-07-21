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
