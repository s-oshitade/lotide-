/**
 * Takes in an array and returns the first element in the array.
 * @param {array} 
 * @returns {*}
 */
const head = (arr) => {
  if (!Array.isArray(arr)) {
    return "Error: Input is not an array!";
  }
  return arr[0];
};

module.exports = head;