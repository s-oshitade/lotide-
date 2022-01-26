/**
 * Takes in 2 values and returns true if they are equal and false otherwise.
 * @param {*} actual 
 * @param {*} expected 
 */
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`\n✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`\n🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);

module.exports = assertEqual;