/**
 * Takes in a string and returns all indices of letter positions in the string.
 * @param {string} sentence
 * @returns object
 */

 const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase().split(" ").join("");
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
letterPositions("Lighthouse in the house");
module.exports = letterPositions;
