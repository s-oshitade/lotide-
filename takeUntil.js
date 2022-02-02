const assertArraysEqual = require('./assertArraysEqual');
/**
 * Takes in an array and function (callback) and returns a slice of the array based on the criteria specified in the callback.
 * @param {array} 
 * @param {function}
 * @returns {array}
 */

const takeUntil = function(array, callback){
  let result =[];
  for (const item of array){
    if (!callback(item)){
      result.push(item)
    } else {
      break;  //Stop looping when callback returns truthy
    }
  }
  return result;
}

//@example
const data = ['mercury', 'venus', 'earth', 'moon', 'andromeda', 'milkyway'];
assertArraysEqual(takeUntil(data, x => x === 'moon'),['mercury', 'venus', 'earth'])

console.log('---'); 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])

console.log('---'); 

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"])
