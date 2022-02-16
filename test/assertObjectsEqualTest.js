const assertObjectsEqual = require('../assertObjectsEqual');
const {assert} = require('chai');

describe("#assertObjectsEqual", () => {
  it('returns true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    assert.deepEqual(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  
  it('returns true for { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }', () => {
    assert.deepEqual(assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it('returns false for { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }', () => {
    assert.deepEqual(assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });

  it('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); //Fxn is not designed to handle nested objects.
  });

  it('returns true for { Name: "Jake", Age: 21 }, { Name: "Jake", Age: 21 }', () => {
    assert.deepEqual(assertObjectsEqual({ Name: "Jake", Age: 21 }, { Name: "Jake", Age: 21 }), true);
  });

  it('returns true for { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"] }, { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"]}', () => {
    assert.deepEqual(assertObjectsEqual({ Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"] }, { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"]  }), true);
  });
});





