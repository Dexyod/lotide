// TEST ASSERTION IMPLEMENTATION
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

//ACTUAL FUNCTION IMPLEMENTATION
const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4, 5];

const results2 = map(numbers, (num) => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10]);

const people = [
  { name: "Declan", age: 28 },
  { name: "Fiona", age: 32 },
  { name: "Bowie", age: 3 },
];

const results3 = map(people, (person) => person.name);
assertArraysEqual(results3, ["Declan", "Fiona", "Bowie"]);
