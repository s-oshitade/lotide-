const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
/**
 * Write a function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
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

