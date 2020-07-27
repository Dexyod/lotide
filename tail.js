// FUNCTION IMPLEMENTATION
const tail = (array) => {
  let tailedArray = [];
  for (let i = 1; i < array.length; i++) {
    //start at index 1 as we don't want the first element
    tailedArray.push(array[i]);
  }
  return tailedArray;
};
module.exports = tail;
