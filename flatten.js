const flatten = function (array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let nextValue = array[i];
    if (Array.isArray(nextValue)) {
      for (let j = 0; j < nextValue.length; j++) {
        result.push(nextValue[j]);
      }
    } else {
      result.push(nextValue);
    }
  }
  return result;
};

module.exports = flatten;
