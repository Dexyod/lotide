// FUNCTION IMPLEMENTATION
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true if elements in both arrays are strict equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false if elements in both arrays are not strict equal", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("should return false if array lengths are not equal", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
  });
  it("should return true if nested arrays are deep equal", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
});
