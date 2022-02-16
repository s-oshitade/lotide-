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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); //true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

module.exports = assertObjectsEqual;