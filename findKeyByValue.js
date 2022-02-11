const assertEqual = require('./assertEqual');
const findKey = require('./findKey');
/**
 * Takes in an object and a value and returns the first key that corresponds to that value.
 * @param {object} obj
 * @param {string} val
 * @returns {string}
 */
const findKeyByValue = (obj, value) => {
  let result = "";
  for (let key in obj) {
    if (obj[key] === value) {
      result += key;
      return result;
    }
  }
};

module.exports = findKeyByValue;