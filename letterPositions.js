// ACTUAL FUNCTION
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (char in sentence) {
    let index = Number(char);
    if (!results[sentence[index]]) {
      results[sentence[index]] = [index];
    } else {
      results[sentence[index]].push(index);
    }
  }
  return results;
};

module.exports = letterPositions;
