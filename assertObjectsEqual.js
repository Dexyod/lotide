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
module.exports = assertObjectsEqual;
