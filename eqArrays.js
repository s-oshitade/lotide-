/**
 * Takes in 2 arrays and returns true if the arrays are equal and false otherwise.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 * @see {eqArraysRecursive}
 */

//Note: This function is not intended to compare nested arrays or arrays of objects. 
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length || !Array.isArray(arr1) || !Array.isArray(arr2)) {
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
