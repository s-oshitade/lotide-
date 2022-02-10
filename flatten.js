/**
 * Function returns flattened version of input array
 * @param {array} inputArr
 * @returns {array}
 * @todo Revise to handle deeper nesting with recursion
 */

const flatten = (inputArr) => {
  let flattenedArr = [];
  if (!Array.isArray(inputArr)) {
    return "Error: Input is not an array!";
  }
  if (inputArr.length === 0) {
    return undefined;
  }
  for (const element of inputArr) {
    if (!Array.isArray(element)) {
      flattenedArr.push(element);
    } else {
      for (const innerElem of element) {
        flattenedArr.push(innerElem);
      }
    }
  }
  return flattenedArr;
};

module.exports = flatten;