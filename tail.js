/**
 * Takes in an array and returns every element except the first.
 * @param {array} arr
 * @returns {array}
 */
const tail = (arr) => {
  if (!Array.isArray(arr)) {
    return "Error: Input is not an array!";
  }
  if (arr.length === 0) {
    return [];
  }
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;