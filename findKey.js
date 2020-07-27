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
module.exports = findKey;
