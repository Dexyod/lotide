const eqArrays = function (array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
    return true;
  } else {
    return array1 === array2;
  }
};

module.exports = eqArrays;
