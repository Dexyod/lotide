// FUNCTION IMPLEMENTATION
const tail = (array) => {
  if (!array.length || !Array.isArray(array)) {
    return [];
  }
  let tailedArray = [];
  for (let i = 1; i < array.length; i++) {
    //start at index 1 as we don't want the first element
    tailedArray.push(array[i]);
  }
  return tailedArray;
};
module.exports = tail;
