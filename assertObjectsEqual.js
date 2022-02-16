const eqObjects = require('./eqObjects');
/**
 * Compares two objects
 * @param {*} obj1
 * @param {*} obj2
 * @returns boolean
 */

const assertObjectsEqual = function (obj1, obj2){
  if(eqObjects(obj1, obj2)){
    return true;
  } else {
    return false;
  }
};

module.exports = assertObjectsEqual;