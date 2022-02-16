const eqArrays = require('./eqArrays');
/**
 * Takes in 2 arrays and returns true if they are equal and false otherwise.
 * @param {*} actual
 * @param {*} expected
 * @return {boolean}
 */

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertArraysEqual;