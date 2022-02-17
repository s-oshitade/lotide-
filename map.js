const assertArraysEqual = require('./assertArraysEqual')
/**
 * Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
 * @param {array}
 * @param {function} callback
 * @returns array
 */

const map = (array, callback) => {
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

//Test Cases
assertArraysEqual(map(['Jake', 'Hannah', 'Martha'], fName => `${fName} Oshitade`), ['Jake Oshitade', 'Hannah Oshitade', 'Martha Oshitade'], true);

const cities = ['Calgary', 'Edmonton', 'Toronto'];
assertArraysEqual(map(cities, city => `${city[0]}${city[1]}${city[2]}`), ['Cal', 'Edm', 'Tor']);

const grades = ['Maths A', 'Physics B+', 'Programming A+'];
assertArraysEqual(map(grades, grade => `${grade.slice(- 2).trim()}`), ['A', 'B+', 'A+']);

module.exports = map;