const assertEqual = require('./assertEqual');
/**
 * Function returns count of specified subset of input array
 * @param {Array} allItems
 * @param {Object} itemsToCount
 * @returns {Object}
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  console.log(results)
  return results;
};

//Test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
