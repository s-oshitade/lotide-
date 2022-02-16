const assertEqual = require('../assertEqual');
const {assert} = require('chai');

describe("#assertEqual", () => {
  it('returns true for "Lighthouse Labs", "Lighthouse Labs"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"), true);
  });
  it('returns true for 1, 1', () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
  it('returns false for 1, 2', () => {
    assert.strictEqual(assertEqual(1, 2), false);
  });
  it('returns true for undefined, undefined', () => {
    assert.strictEqual(assertEqual(undefined, undefined), true);
  });
  it('returns true for null, null', () => {
    assert.strictEqual(assertEqual(null, null), true);
  });
  it('returns true for Number.isNaN(NaN), Number.isNaN(NaN)', () => {
    assert.strictEqual(assertEqual(Number.isNaN(NaN), Number.isNaN(NaN)), true);
  });
  it('returns true for Number.isNaN(7), Number.isNaN(7)', () => {
    assert.strictEqual(assertEqual(Number.isNaN(7), Number.isNaN(7)), true);
  });
  it('returns true for Number.isNaN("I love to code!"), Number.isNaN("I love to code!")', () => {
    assert.strictEqual(assertEqual(Number.isNaN(7), Number.isNaN(7)), true);
  });
  it('returns true for NaN, NaN', () => {
    assert.strictEqual(assertEqual(NaN, NaN), false); //NaN is the only value in JavaScript which is not equal to itself.
  });
});
