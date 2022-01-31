const assertEqual = require('./assertEqual');
/**
 * Returns first key which contains the given value
 * @param {object} obj
 * @param {string} val
 */

const findKeyByValue = (object, value) => {
  let result = "";
  for (let property in object) {
    if (object[property] === value) {
      result += property;
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