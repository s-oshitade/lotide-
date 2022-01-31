const assertEqual = require('./assertEqual');
/**
 * Takes in an object and a value and returns the first key that corresponds to that value.
 * @param {object} obj
 * @param {string} val
 * @returns {string}
 */

const findKeyByValue = (object, value) => {
  let result = "";
  for (let key in object) {
    if (object[key] === value) {
      result += key;
      return result;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);