const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const tail = (array) => {
  let tailedArray = [];
  for (let i = 1; i < array.length; i++) {
    tailedArray.push(array[i]);
  }
  return tailedArray;
};

// TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);

// assertEqual(words.length, 3);

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
module.exports = tail;
