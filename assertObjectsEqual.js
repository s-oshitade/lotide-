const eqObjects = require('./eqObjects');
/**
 * Takes in 2 objects and returns true if they are equal and false otherwise
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