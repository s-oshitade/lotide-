const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test Cases
assertArraysEqual((middle([1, 2, 3])), [2]); // => [2]
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); // => [3]
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); // => [2, 3]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]); // => [3, 4]
