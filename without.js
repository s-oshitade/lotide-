/**
 * Function removes unwanted elements from a given array
 * @param {*} source
 * @param {*} itemsToRemove
 * @returns array
 */
const without = (source, itemsToRemove) => {
  let result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;