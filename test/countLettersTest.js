const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("should return an object with keys as chars in string and values of how many times the chars show up in the string", () => {
    const result = countLetters("LHL");
    const expectedOutcome = {
      l: 2,
      h: 1,
    };
    assert.deepEqual(result, expectedOutcome);
  });
  it("should return an empty object when empty string is input", () => {
    const result = countLetters("");
    const expectedOutcome = {};
    assert.deepEqual(result, expectedOutcome);
  });
});
