const assert = require("chai").assert;
const without = require("../without");

// //TEST CODE
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

describe("#without", () => {
  it("should return the array without the element provided as the value.", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});
