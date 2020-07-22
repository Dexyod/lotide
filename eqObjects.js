//TEST/ASSERTION FUNCTIONS
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
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

//ACTUAL FUNCTION
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

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
