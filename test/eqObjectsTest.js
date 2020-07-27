const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  it("should return true if Objects are strictly equal", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("should return false if Objects are not same length", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("should return true if Objects have same keys and arrays as values ", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("should return false if Objects nested and arrays as values aren't the same", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
  it("should return true if nested objects are input", () => {
    assert.deepEqual(
      eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    );
  });
});
