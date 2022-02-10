const assert = require('chai').assert;
const countOnly = require('../countOnly');

//Test Set1
const team = ["Mark", "Seun", "Justin", "Martha", "Seun", "Michael", "Tolu"];
const developers = { "Seun": true, "Justin": false, "Martha": true, "Mark": true, "Tolu": false};
const analysts = { "Seun": false, "Justin": true, "Martha": false, "Mark": false, "Tolu": false};
const projMgr = { "Seun": false, "Justin": false, "Martha": false, "Jake": true, "Tolu": true};

//Test Set2
const grades = ["A+", "A", "B", "B+", "C", "A", "C+", "A"];
const distinctions = {"A+": true, "A": true, "B+": false, "C": false, "F": false };
const credits = {"A+": false, "A": false, "B+": true, "C": true, "F": false };
const retakeCourse = {"A+": false, "A": false, "B+": false, "C": false, "F": true };

//Test Set3
const allItems = [
  "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"
];
const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
const itemsToCount1 = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": true };

describe("#countOnly", () => {
  it("returns {Seun: 2, Martha:1, Mark: 1} for team, developers", () => {
    assert.deepEqual(countOnly(team, developers), {Seun: 2, Martha:1, Mark: 1});
  });

  it("returns {Justin: 1} for team, analysts", () => {
    assert.deepEqual(countOnly(team, analysts), {Justin: 1});
  });

  it("returns {Seun: 2, Tolu: 1} for team, projMgr", () => {
    assert.deepEqual(countOnly(team, projMgr), {Tolu: 1});
  });
  
  it("returns {'A+': 1, A: 3} for grades, distinctions", () => {
    assert.deepEqual(countOnly(grades, distinctions), {'A+': 1, A: 3});
  });

  it("returns {'B+': 1, C: 1} for grades, credits", () => {
    assert.deepEqual(countOnly(grades, credits), {'B+': 1, C: 1});
  });

  it("returns {} for grades, retakeCourse", () => {
    assert.deepEqual(countOnly(grades, retakeCourse), {});
  });

  it("returns {Fang: 2, Jason:1} for allItems, itemsToCount", () => {
    assert.deepEqual(countOnly(allItems, itemsToCount), {Fang: 2, Jason:1});
  });

  it("returns {Fang: 2, Jason: 1, Agouhanna: 1} for allItems, itemsToCount", () => {
    assert.deepEqual(countOnly(allItems, itemsToCount1), {Fang: 2, Jason: 1, Agouhanna: 1});
  });
});

