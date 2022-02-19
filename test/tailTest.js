const tail = require('../tail');
const { assert } = require('chai');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });

  it("returns [101, 11] for [1001, 101, 11]", () => {
    assert.deepEqual(tail([1001, 101, 11]), [101, 11]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns 'Error: Input is not an array!' for 307", () => {
    assert.strictEqual(tail(307), 'Error: Input is not an array!');
  });
});
