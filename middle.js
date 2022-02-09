/**
 * Takes in an array and returns the middle most element(s) of the array.
 * @param {array} arr
 * @returns {array}
 */
const middle = (arr) => {
  if (!Array.isArray(arr)) {
    return "Error: Input is not an array!";
  }
  let middleIndex = Math.ceil(arr.length / 2) - 1; //Minus 1 accounts for zero indexing
  if(arr.length <= 2) {
    return [];
  } 
  if(arr.length % 2 === 0) {
    return [arr[middleIndex], arr[middleIndex + 1]];
  } 
  return  [arr[middleIndex]];
};

module.exports = middle;
