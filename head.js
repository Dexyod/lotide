const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const head = (array) => array[0];

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([7]), 7);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
