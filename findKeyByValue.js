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

module.exports = findKeyByValue;
