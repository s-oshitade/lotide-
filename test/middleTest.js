const { assert } = require('chai');
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("returns [] for ['tik', 'tok']", () => {
    assert.deepEqual(middle(['tik', 'tok']), []);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['an', 'even'] for ['This', 'is', 'an', 'even', 'number', 'length']", () => {
    assert.deepEqual(middle(['This', 'is', 'an', 'even', 'number', 'length']), ['an', 'even']);
  });
  
  it("returns 'Error: Input is not an array!' for 202", () => {
    assert.deepEqual(middle(202), 'Error: Input is not an array!');
  });
});

