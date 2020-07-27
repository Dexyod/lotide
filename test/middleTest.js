const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns empty array when passed in an array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty array when passed in an array with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns the middle element when passed in an array with odd numbered length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns an array with the two elements from the middle of an even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
