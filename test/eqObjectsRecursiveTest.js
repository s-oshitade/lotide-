const eqObjectsRecursive = require('../eqObjectsRecursive');
const assert = require('chai').assert;

describe("#eqObjectsRecursive", () => {
  it('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it('returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  
  it('returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  
  it('returns true for { a: "1", b: "2" }, { a: "1", b: "2" }', () => {
    assert.deepEqual(eqObjectsRecursive({ a: "1", b: "2" }, { a: "1", b: "2" }), true);
  });

  it('returns true for { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }', () => {
    assert.deepEqual(eqObjectsRecursive({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it('returns false for { a: "2", b: "2" }, { a: "1", b: "2" }', () => {
    assert.deepEqual(eqObjectsRecursive({ a: "2", b: "2" }, { a: "1", b: "2" }), false);
  });

  it('returns true for { Name: "Jake", Age: 21 }, { Name: "Jake", Age: 21 }', () => {
    assert.deepEqual(eqObjectsRecursive({ Name: "Jake", Age: 21 }, { Name: "Jake", Age: 21 }), true);
  });

  it('returns false for { Name: "Drake", Age: 21 }, { Name: "Jake", Age: 21 }', () => {
    assert.deepEqual(eqObjectsRecursive({ Name: "Drake", Age: 21 }, { Name: "Jake", Age: 21 }), false);
  });

  it('returns true for { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"] }, { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"]}', () => {
    assert.deepEqual(eqObjectsRecursive({ Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"] }, { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"]  }), true);
  });

  it('returns false for { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen"] }, { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"]}', () => {
    assert.deepEqual(eqObjectsRecursive({ Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen"] }, { Class: "Analgesics", Examples: ["acetaminophen", "ibuprofen", "diclofenac"]  }), false);
  });

});
