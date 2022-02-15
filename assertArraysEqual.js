const eqArrays = require('./eqArrays');
/**
 * Takes in 2 arrays and returns true if they are equal and false otherwise.
 * @param {*} actual
 * @param {*} expected
 */

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed!: ${actual} === ${expected}`);//Allow assert function to print to console.
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed!: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertArraysEqual;