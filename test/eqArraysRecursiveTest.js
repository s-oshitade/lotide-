const eqArraysRecursive = require('../eqArraysRecursive');
const {assert} = require('chai');

describe("#eqArraysRecursive", () => {
  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.deepEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false for [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.deepEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns false for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.deepEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArraysRecursive([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true for [1, 3], [1, 3]", () => {
    assert.deepEqual(eqArraysRecursive([1, 3], [1, 3]), true);
  });

  it("returns true for [17, 21, 33], [17, 21, 33]", () => {
    assert.deepEqual(eqArraysRecursive([17, 21, 33], [17, 21, 33]), true);
  });

  it("returns false for ['Seun', 'Sarah'], ['Martha', 'Sarah']", () => {
    assert.deepEqual(eqArraysRecursive(['Seun', 'Sarah'], ['Martha', 'Sarah']), false);
  });

  it("returns false for ['Seun', 'Sarah', 'Martha'], ['Seun', 'Sarah']", () => {
    assert.deepEqual(eqArraysRecursive(['Seun', 'Sarah', 'Martha'], ['Seun', 'Sarah']), false);
  });
  
  it("returns false for ['James'], ['Jack']", () => {
    assert.deepEqual(eqArraysRecursive(['James'], ['Jack']), false);
  });
});
