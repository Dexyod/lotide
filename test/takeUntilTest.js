// TEST ASSERTION IMPLEMENTATION
const assert = require("chai").assert;
const takeUntil = require("../takeUntil");
//TEST CODE
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

describe("#takeUntil", () => {
  it("should return the result of the callback ", () => {
    const input = [
      "I've",
      "been",
      "to",
      "Hollywood",
      ",",
      "I've",
      "been",
      "to",
      "Redwood",
    ];
    const callback = (x) => x === ",";
    assert.deepEqual(takeUntil(input, callback), [
      "I've",
      "been",
      "to",
      "Hollywood",
    ]);
  });
});
