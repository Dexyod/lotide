//TEST/ASSERTION FUNCTIONS
const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

//TEST CODE

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

describe("#findKeyByValue", () => {
  it("should return the value of the key of the value passed in as a parameter", () => {
    const input = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const value = "The Wire";
    const result = findKeyByValue(input, value);

    assert.equal(result, "drama");
  });
  it("should return an empty string if value passed in as a parameter is empty string", () => {
    const input = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    const value = "";
    const result = findKeyByValue(input, value);

    assert.equal(result, "");
  });
  it("should return an empty string if object passed in as a parameter is empty", () => {
    const input = {};
    const value = "";
    const result = findKeyByValue(input, value);

    assert.equal(result, "");
  });
});
