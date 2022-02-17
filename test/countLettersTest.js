const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });

  it("returns { g: 2, o: 5, p: 1, r: 2, h: 1, m: 1, e: 1, '!': 1 } for 'Go Pro or Go Home!'", () => {
    assert.deepEqual(countLetters('Go Pro or Go Home!'), { g: 2, o: 5, p: 1, r: 2, h: 1, m: 1, e: 1, '!': 1 });
  });
});
