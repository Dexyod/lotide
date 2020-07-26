//TEST/ASSERTION FUNCTIONS
const assertEqual = require("./assertEqual");
//ACTUAL FUNCTION

const findKeyByValue = function (object, value) {
  let result;

  for (const i of Object.keys(object)) {
    if (value === object[i]) {
      result = i;
    }
  }

  return result;
};
//TEST CODE
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;
