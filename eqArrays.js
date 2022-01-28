/**
 * takes in 2 arrays and returns true if the arrays are equal and false otherwise.
 * @param {Array}
 * @returns {Boolean}
 */
const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
