const {assert} = require('chai');
const findKey = require('../findKey');

describe("#findKeys", () => {
  it(`returns "noma" for {"Akaleri": { stars: 3 },"noma": { stars: 2 }, "elBulli": { stars: 2 }}, val => val.stars === 2`, () => {
    assert.deepEqual(findKey({"Akaleri": { stars: 3 },"noma": { stars: 2 }, "elBulli": { stars: 2 }}, val => val.stars === 2), "noma");
  });
 
  it(`returns "the big bang theory!" for {"the expanse" : "sci_fi", "the big bang theory!" : "comedy", "the wire" : "drama" }, val => val === "comedy"`, () => {
    assert.deepEqual(findKey({"the expanse" : "sci_fi", "the big bang theory!" : "comedy", "the wire" : "drama" }, val => val === "comedy"), "the big bang theory!");
  });
});

