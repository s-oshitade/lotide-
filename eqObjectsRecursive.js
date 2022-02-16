const eqArrays = require('./eqArrays');
/**
 * Takes in 2 objects and returns true if they are equal and false otherwise. Supports nested objects.
 * @param {*} object1
 * @param {*} object2
 * @returns boolean
 */

const eqObjectsRecursive = function(object1, object2) {
  const keysList1 = [];
  for (const key in object1) {
    keysList1.push(key);
  }
  const keysList2 = [];
  for (const key in object2) {
    keysList2.push(key);
  }
  if (keysList1.length !== keysList2.length) { //check length
    return false;
  }
  for (let key of keysList1) {
    if (typeof object1[key] !== 'object' || typeof object1[key] !== 'object') { //handle primitive values
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {  //handle arrays
      return eqArrays(object1[key], object2[key]);
    }
    if ((typeof object1[key] === 'object' && 
    object1[key] !== null) && (typeof object2[key] === 'object' &&
    object2[key] !== null)) {
      if (!eqObjectsRecursive(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};
module.exports = eqObjectsRecursive;