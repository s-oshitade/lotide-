/**
 * Takes in an array and returns the first element in the array.
 * @param {array} arr
 */
const assertEqual = require('./assertEqual');

const head = (arr) => {
  return arr[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);

