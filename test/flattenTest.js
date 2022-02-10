const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('returns ["😎", "💩", "🤗", "😼", "😂"] for ["😎", ["💩", "🤗"], "😼", "😂"]', () => {
    assert.deepEqual(flatten(["😎", ["💩", "🤗"], "😼", "😂"]), ["😎", "💩", "🤗", "😼", "😂"]);
  });

  it("returns [2, 2, 2, 2, 2, 2] for [2, 2, [2, 2], 2, [2]]", () => {
    assert.deepEqual(flatten([2, 2, [2, 2], 2, [2]]), [2, 2, 2, 2, 2, 2]);
  });

  it("returns ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sun'] for ['Mon', 'Tues', ['Wed', 'Thur'], ['Fri', 'Sat', 'Sun']]", () => {
    assert.deepEqual(flatten(['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sun']), ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sun']);
  });

  it("returns (2, 2, [2, 2], 2, [2]) for (2, 2, [2, 2], 2, [2])", () => {
    assert.deepEqual(flatten((2, 2, [2, 2], 2, [2])), (2, 2, [2, 2], 2, [2]));
  });

  it("returns undefined for []", () => {
    assert.strictEqual(flatten([]), undefined);
  });

  it("returns 'Error: Please provide an array as input.' for 307", () => {
    assert.strictEqual(flatten(307), 'Error: Input is not an array!');
  });
});