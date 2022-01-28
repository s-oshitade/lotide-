const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
/**
 * Function returns flattened version of input array
 * @param {Array} inputArr
 * @returns {Array}
 */

const flatten = (inputArr) => {
  let flattenedArr = [];
  if (!Array.isArray(inputArr)) {
    return "Error: Please provide an array as input.";
  }
  for (const element of inputArr) {
    if (!Array.isArray(element)) {
      flattenedArr.push(element);
    } else {
      for (const innerElem of element) {
        flattenedArr.push(innerElem);
      }
    }
  }
  console.log(flattenedArr);
  return flattenedArr;
};

/**
 * @todo Revise to handle deeper nesting with recursion
 */

// Test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) 

module.exports = flatten;