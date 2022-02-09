const head = require('../head');
const { assert } = require('chai');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 1001 for [1001, 101, 11]", () => {
    assert.strictEqual(head([1001, 101, 11]), 1001);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 'Error: Input is not an array!' for 707", () => {
    assert.strictEqual(head(707), 'Error: Input is not an array!');
  });
});

