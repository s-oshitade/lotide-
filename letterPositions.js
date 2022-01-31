const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
/**
 * Function returns all indices of letter positions in param
 * @param {string} sentence
 * @returns object
 */

 const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
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

assertArraysEqual(letterPositions("hello").h,[0])
assertArraysEqual(letterPositions("hello").e,[1])
assertArraysEqual(letterPositions("hello").l,[2, 3])
assertArraysEqual(letterPositions("hello").o,[4])
console.log(letterPositions("lighthouse in the house"))

module.exports = letterPositions;
