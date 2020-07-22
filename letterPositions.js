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
const result1 = letterPositions("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);
