const {assert} = require('chai');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  comedy: "Big Bang Theory",
  medical_drama:  "Doctor Martin",
  action_detective: "FBI",
  epic_action: "Gladiator"
};

describe("#findKeyByValue", () => {
  it('returns comedy for bestTVShowsByGenre, Big Bang Theory', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Big Bang Theory"), "comedy");
  });

  it('returns medical_drama for bestTVShowsByGenre, Doctor Martin', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Doctor Martin"), "medical_drama");
  });

  it('returns undefined for bestTVShowsByGenre, The Godfather', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Godfather"), undefined);
  });

  it('returns action_detective for bestTVShowsByGenre, FBI', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "FBI"), "action_detective");
  });

  it('returns undefined for bestTVShowsByGenre, The Squid', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Squid"), undefined);
  });

  it('returns epic_action for bestTVShowsByGenre, Gladiator', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Gladiator"), "epic_action");
  });
});
