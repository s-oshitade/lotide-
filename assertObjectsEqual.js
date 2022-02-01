const eqObjects = require('./eqObjects');
/**
 * Compares two objects
 * @param {*} actual
 * @param {*} expected
 * @returns boolean
 * @todo Refactor final function to return boolean
 */

const assertObjectsEqual = function (actual, expected){
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`\n✅✅✅ Assertion Passed!: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`\n🛑🛑🛑 Assertion Failed!: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); //true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false