const assertArraysEqual = require('../assertArraysEqual');
const {assert} = require('chai');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], 1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true for [1, 3], [1, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 3], [1, 3]), true);
  });

  it("returns true for [17, 21, 33], [17, 21, 33]", () => {
    assert.deepEqual(assertArraysEqual([17, 21, 33], [17, 21, 33]), true);
  });

  it("returns false for ['Seun', 'Sarah'], ['Martha', 'Sarah']", () => {
    assert.deepEqual(assertArraysEqual(['Seun', 'Sarah'], ['Martha', 'Sarah']), false);
  });

  it("returns false for ['Seun', 'Sarah', 'Martha'], ['Seun', 'Sarah']", () => {
    assert.deepEqual(assertArraysEqual(['Seun', 'Sarah', 'Martha'], ['Seun', 'Sarah']), false);
  });
  
  it("returns false for ['James'], ['Jack']", () => {
    assert.deepEqual(assertArraysEqual(['James'], ['Jack']), false);
  });
});