//TEST ASSERTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const findKey = (object, callback) => {
  let results = "";
  for (const i of Object.keys(object)) {
    if (callback(object[i])) {
      results = i;
      break;
    }
  }
  return results;
};

//TEST CODE

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
); // => "noma"
