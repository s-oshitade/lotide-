const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns {h: [0], e: [1], l: [2, 3], o: [4]} for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it("returns {g: [0], o: [1, 2], s: [3], e: [4]} for 'goose'", () => {
    assert.deepEqual(letterPositions("goose"), {g: [0], o: [1, 2], s: [3], e: [4]});
  });

  it("returns {c: [7], d: [9], e: [4, 10], i: [0], l: [1], v: [3], o: [2, 6, 8], t: [5]} for 'I love to code'", () => {
    assert.deepEqual(letterPositions("I love to code"), {i: [0], l: [2], o: [3, 8, 11], v: [4], e: [5, 13], t: [7], c: [10], d: [12]})
  })

  it("returns [3, 5, 15, 18] for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});

