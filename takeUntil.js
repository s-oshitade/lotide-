/**
 * Takes in an array and function (callback) and returns a slice of the array based on the criteria specified in the callback.
 * @param {array}
 * @param {function}
 * @returns {array}
 */

const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;  //Stop looping when callback returns truthy
    }
  }
  return result;
};

module.exports = takeUntil;