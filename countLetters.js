const assertEqual = require('./assertEqual');
/**
 * Function takes in a sentence and counts the letters in the sentence
 * @param {String} input
 * @returns {Object}  
 */

const countLetters = function (input) {
  inputArray = input.split("")
  console.log(inputArray)
  let result = {};
  for (let element of input){
    if (element === " "){
      continue
    } else {
      !result[element] ? result[element] = 1 : result[element] += 1;
    }
  }
  return result;
}

//Test

console.log(countLetters("lighthouse in the house"))

module.exports = countLetters;