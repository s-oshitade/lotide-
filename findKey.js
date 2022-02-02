const assertEqual = require('./assertEqual');
/**
 * Takes in an object and callback and returns the first key that meets the criteria specified in callback.
 * @param {object}
 * @param {function} callback
 * @returns {*}
 */

//Additional requirement: If no key is found, function findKey returns undefined.
const findKey = (myObj, callback) => {
  for (const key in myObj) {
    if (callback(myObj[key])) {
      return key;
    }
  }
};

// Test cases
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, val => val.stars === 2), "noma");

console.log('---');

const obj = {
  "the expanse" : "sci_fi",
  "the big bang theory!" : "comedy",
  "the wire" : "drama"
};
assertEqual(findKey(obj, val => val === "comedy"), "the big bang theory!");




