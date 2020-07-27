//ACTUAL FUNCTION
const eqObjects = (object1, object2) => {
  if (object1 === object2) return true;
  const lengthOfKeys = (object) => {
    let result = Object.keys(object).length;
    return result;
  };
  if (lengthOfKeys(object1) !== lengthOfKeys(object2)) return false;

  for (const key in object1) {
    if (!(key in object2)) return false;
    if (!eqObjects(object1[key], object2[key])) return false;
  }
  return true;
};

module.exports = eqObjects;
