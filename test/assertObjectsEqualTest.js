const assertObjectsEqual = require('../assertObjectsEqual');
const {assert} = require('chai');

describe("#assertObjectsEqual", () => {
  it('returns true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    assert.deepEqual(assertObjectsEqual([1, 2, 3], [1, 2, 3]), true);
  });

});



// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(assertObjectsEqual(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertObjectsEqual(cd, cd2)); // => false