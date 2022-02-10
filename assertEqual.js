/**
 * Takes in 2 values and returns true if they are equal and false otherwise.
 * @param {*} actual
 * @param {*} expected
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\n✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\n🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;