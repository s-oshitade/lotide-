/**
 * Takes in a collection of items and returns a specific subset of those items
 * @param {array} allItems
 * @param {object} itemsToCount
 * @returns {object}
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
