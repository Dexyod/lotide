const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
    process.exit(1);
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
      process.exit(1);
    }
  }
  console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
};

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
