const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
/**
 * Takes in an array and returns the middle most element(s) of the array.
 * @param {Array} arr
 * @returns {Array}
 */

const middle = (arr) => {
  let middleIndex = Math.ceil(arr.length / 2) - 1; //Minus 1 accounts for zero indexing
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[middleIndex], arr[middleIndex + 1]];
  } else {
    return  [arr[middleIndex]];
  }
};

module.exports = middle;
