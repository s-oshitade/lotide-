/**
 * Takes in an array and returns every element except the first.
 * @param {Array} arr
 * @returns {Array}
 */
const assertEqual = require('./assertEqual');

const tail = (arr) => {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;