/**
 * Takes in an array and returns every element except the first.
 * @param {array} arr
 * @returns {array}
 */
const tail = (arr) => {
  if (!Array.isArray(arr)) {
    return "Error: Input is not an array!";
  }
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;