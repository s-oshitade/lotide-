const {assert} = require('chai');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });

  it("returns true for [17, 12, 33], [17, 12, 33]", () => {
    assert.deepEqual(eqArrays([17, 12, 33], [17, 12, 33]), true);
  });

  it("returns false for [17, 21, 33], [17, 12, 33]", () => {
    assert.deepEqual(eqArrays([17, 21, 33], [17, 12, 33]), false);
  });

  it('returns true for ["Seun", "Sarah"], ["Seun", "Sarah"]', () => {
    assert.deepEqual(eqArrays(["Seun", "Sarah"], ["Seun", "Sarah"]), true);
  });

  it('returns false for ["Seun", "Sarah", "TLK"], ["Seun", "Sarah"]', () => {
    assert.deepEqual(eqArrays(["Seun", "Sarah", "TLK"], ["Seun", "Sarah"]), false);
  });

  it('returns true for [ ], [ ]', () => {
    assert.deepEqual(eqArrays([ ], [ ]), true);
  });

});