const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
/**
 * Function removes unwanted elements from a given array
 * @param {*} source
 * @param {*} itemsToRemove
 * @returns array
 */

const without = (source, itemsToRemove) => {
  let result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

//Test cases
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"] ); // => ["1", "2"]

module.exports = without;