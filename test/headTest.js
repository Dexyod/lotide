// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const head = require("../head");
// TEST CODE
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head([7]), 7);
// assertEqual(head([]), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns undefined for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("should return first element name of an array of strings", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
