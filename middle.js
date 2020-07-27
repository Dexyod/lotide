//ACTUAL FUNCTION
const middle = function (array) {
  let result = [];
  let middle = 0;

  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    middle = Math.floor((array.length - 1) / 2);
    result = array.splice(middle, 2);
  } else if (!array.length % 2 === 0) {
    middle = Math.floor(array.length / 2);
    result = array.splice(middle, 1);
  }
  return result;
};
module.exports = middle;
