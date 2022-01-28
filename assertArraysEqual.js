const eqArrays = require('./eqArrays');
/**
 * Takes in 2 arrays and returns true if they are equal and false otherwise.
 * @param {*} actual
 * @param {*} expected
 */

const assertArraysEqual = (actual, expected) => {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    console.log(`\n🛑🛑🛑 Please enter arrays only.`);
    return;
  }
  eqArrays(actual, expected) ? console.log(`\n✅✅✅ Assertion Passed!: ${actual} === ${expected}`)
    : console.log(`\n🛑🛑🛑 Assertion Failed!: ${actual} !== ${expected}`);
};

assertArraysEqual(2, 2);

module.exports = assertArraysEqual;