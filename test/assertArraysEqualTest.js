const assertArraysEqual = require('../assertArraysEqual');
const {assert} = require('chai');

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns [1, 3] for [1, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 3], [1, 3]));
  });  
  it("returns [17, 21, 33] for [17, 21, 33]", () => {
    assert.deepEqual(assertArraysEqual([17, 21, 33], [17, 21, 33]));
  });  
  it("returns ['Seun', 'Sarah'] for ['Seun', 'Sarah']", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });  
  it("returns ['Seun', 'Sarah'] for ['Seun', 'Sarah']", () => {
    assert.deepEqual(assertArraysEqual(['Seun', 'Sarah'], ['Seun', 'Sarah']));
  });  
});