const eqObjects = require('./eqObjects');
// Write a function that takes in 2 objects and returns true if they are equal and false otherwise.

const assertObjectsEqual = function (actual, expected){
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`\n✅✅✅ Assertion Passed!: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`\n🛑🛑🛑 Assertion Failed!: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false