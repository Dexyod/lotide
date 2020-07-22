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

const eqObjects = function (object1, object2) {
  if (lengthOfKeys(object1) === lengthOfKeys(object2)) {
    for (const value of Object.keys(object1)) {
      let value1 = object1[value];
      let value2 = object2[value];

      if (Array.isArray(value1) && Array.isArray(value2)) {
        return eqArrays(value1, value2);
      } else {
        if (value1 !== value2) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

const lengthOfKeys = function (object) {
  let result = Object.keys(object).length;

  return result;
};

//ACTUAL FUNCTION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(inspect(actual), inspect(expected))) {
    console.log(
      `🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};
//TEST CODE
const object1 = { a: 1, b: 2 };
const object2 = { a: 1, b: 2 };
assertObjectsEqual(object1, object2);

const object3 = { c: [2, 4], d: [5, 6] };
const object4 = { c: [2, 4, 6], d: [5, 6] };
assertObjectsEqual(object3, object4);
