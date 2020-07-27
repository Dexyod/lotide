const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns length of array -1 when passed in an array of length +2", () => {
    const result = tail(words);
    assert.equal(result.length, 2);
  });
  it("returns second element of original array as first element when passed in an array of length +2", () => {
    const result = tail(words);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns third element of original array as second element when passed in an array of length +2", () => {
    const result = tail(words);
    assert.strictEqual(result[1], "Labs");
  });
  it("returns empty array is array length is 0", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
  it("returns empty array if array is not passed inputted", () => {
    const result = tail("");
    assert.deepEqual(result, []);
  });
});
