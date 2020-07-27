// TEST ASSERTION IMPLEMENTATION
const assert = require("chai").assert;
const map = require("../map");

// //TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, (word) => word[0]);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// const numbers = [1, 2, 3, 4, 5];

// const results2 = map(numbers, (num) => num * 2);
// assertArraysEqual(results2, [2, 4, 6, 8, 10]);

// const people = [
//   { name: "Declan", age: 28 },
//   { name: "Fiona", age: 32 },
//   { name: "Bowie", age: 3 },
// ];

// const results3 = map(people, (person) => person.name);
// assertArraysEqual(results3, ["Declan", "Fiona", "Bowie"]);

describe("#map", () => {
  it("should return the result of the callback ", () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const callback = (word) => word[0];
    assert.deepEqual(map(input, callback), ["g", "c", "t", "m", "t"]);
  });
});
