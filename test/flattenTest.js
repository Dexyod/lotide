const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("should return an array with all elements of an input of multiple nested arrays", () => {
    const input = [1, 2, [3, 5], [4], 5, [6, 7]];
    const output = [1, 2, 3, 5, 4, 5, 6, 7];
    const result = flatten(input);

    assert.deepEqual(result, output);
  });
  it("should return an array with all elements of an input of a single arrays", () => {
    const input = [1, 5, 7, 9, 1, 5];
    const output = [1, 5, 7, 9, 1, 5];
    const result = flatten(input);

    assert.deepEqual(result, output);
  });
  it("should return an empty array with an input of an empty arrays", () => {
    const input = [];
    const output = [];
    const result = flatten(input);

    assert.deepEqual(result, output);
  });
});
