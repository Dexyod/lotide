//TEST/ASSERTION FUNCTION
const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

//TEST CODE
// const result1 = letterPositions("hello");
// assertArraysEqual(result1["h"], [0]);
// assertArraysEqual(result1["e"], [1]);
// assertArraysEqual(result1["l"], [2, 3]);
// assertArraysEqual(result1["o"], [4]);
describe("#letterPositions", () => {
  it("should return an object with the index of each non repeated letter as the keys", () => {
    const result = letterPositions("hello");
    const expectedOutput = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    };
    assert.deepEqual(result, expectedOutput);
  });
  it("should return an empty object when passed an empty string", () => {
    const result = letterPositions("");
    const expectedOutput = {};
    assert.deepEqual(result, expectedOutput);
  });
});
