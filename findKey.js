/**
 * Takes in an object and callback and returns the first key for which the callback returns a truthy value
 * @param {object} myObj
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

module.exports = findKey;


