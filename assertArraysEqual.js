const eqArrays = require('./eqArrays');
/**
 * Takes in 2 arrays and returns true if they are equal and false otherwise.
 * @param {*} actual
 * @param {*} expected
 */

 const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) { //Check if eqArrays returns truthy value
    console.log(`\n✅✅✅ Assertion Passed!: ${actual} === ${expected}`);
  } else {
    console.log(`\n🛑🛑🛑 Assertion Failed!: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;