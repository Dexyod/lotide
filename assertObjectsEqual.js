//TEST/ASSERTION FUNCTIONS
const eqObjects = require("./eqObjects");

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
// const object1 = { a: 1, b: 2 };
// const object2 = { a: 1, b: 2 };
// assertObjectsEqual(object1, object2);

// const object3 = { c: [2, 4], d: [5, 6] };
// const object4 = { c: [2, 4, 6], d: [5, 6] };
// assertObjectsEqual(object3, object4);

module.exports = assertObjectsEqual;
