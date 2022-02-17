const {assert} = require('chai');
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("returns ['mercury', 'venus', 'earth'] for ['mercury', 'venus', 'earth', 'moon', 'andromeda', 'milkyway'], x => x === 'moon'", () => {
    assert.deepEqual(takeUntil(['mercury', 'venus', 'earth', 'moon', 'andromeda', 'milkyway'], x => x === 'moon'), ['mercury', 'venus', 'earth']);
  });
  
  const data = ["I\'ve", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  it('returns ["I\'ve", "been", "to", "Hollywood"] for data, x => x === ","', () => {
    assert.deepEqual(takeUntil(data, x => x === ","), ["I\'ve", "been", "to", "Hollywood"]);
  });
});
