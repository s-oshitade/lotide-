const {assert} = require('chai');
const without = require('../without');

describe("#without", () => {
  it('returns ["hello", "world"] for ["hello", "world", "lighthouse"], ["lighthouse"]', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });

  it('returns ["1", "2"] for ["1", "2", "3"], [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('returns [1] for [1, 2, 3], [2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [2, 3]), [1]);
  });

  it('returns ["😎"] for ["😎", "💩", "🤗", "😼", "😂"], ["💩", "🤗", "😼", "😂"]', () => {
    assert.deepEqual(without(["😎", "💩", "🤗", "😼", "😂"], ["💩", "🤗", "😼", "😂"]), ["😎"]);
  });



});
