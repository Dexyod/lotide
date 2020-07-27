const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("should return an object with keys of names and values of how many times that were in the array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const itemsToFind = {
      Jason: true,
      Karima: true,
      Fang: 2,
    };

    const result = {
      Jason: 1,
      Fang: 2,
    };
    assert.deepEqual(countOnly(firstNames, itemsToFind), result);
  });
  it("should return an empty object if passed an empty array of object", () => {
    const firstNames = [];

    const itemsToFind = {};

    const result = {};
    assert.deepEqual(countOnly(firstNames, itemsToFind), result);
  });
});
