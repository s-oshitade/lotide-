/**
 * Function takes in a sentence and returns a count of EACH of the letters in the sentence.
 * @param {string}
 * @returns {object}
 */

const countLetters = function(input) {
  input = input.toLocaleLowerCase();
  let result = {};
  for (let element of input) {
    if (element === " ") {
      continue;
    } else {
      !result[element] ? result[element] = 1 : result[element] += 1;
    }
  }
  return result;
};

module.exports = countLetters;