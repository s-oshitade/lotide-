/**
 * Takes in 2 arrays and returns true if the arrays are equal and false otherwise. Supports sub-arrays.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
function eqArraysRecursive (arr1, arr2) {
  if (arr1.length !== arr2.length || !Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
 
  for (let index = 0; index < arr1.length; index++) {
    if (!Array.isArray(arr1[index]) || !Array.isArray(arr2[index])) {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
      if (!eqArraysRecursive(arr1[index], arr2[index])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArraysRecursive;
  
  
  