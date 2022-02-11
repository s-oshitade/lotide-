const eqArrays = require('./eqArrays');
/**
 * Takes in 2 objects and return true if they are equal and false otherwise.
 * @param {*} object1
 * @param {*} object2
 * @returns boolean
 */
const eqObjects = function(object1, object2) {
  const keysList1 = Object.keys(object1);
  const keysList2 = Object.keys(object2);
  if (keysList1.length !== keysList2.length) { //check length
    return false;
  }
  for (let key of keysList1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;