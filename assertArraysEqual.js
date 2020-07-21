// FUNCTION IMPLEMENTATION
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

//TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// assertArraysEqual([1, "2", 3], [1, 2, 3]);
