const assertArraysEqual = require('./assertArraysEqual')
/**
 * Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
 * @param {array}
 * @param {function} callback
 * @return array
 * @todo - Be sure to find at least 3 different scenarios that make sense to test the maps function.
 */

 const lhlProjects = ["lotide", "snakeApp", "tinyApp", "tweeter", "lighthouseBnB", "mid-term", "interviewScheduler", "finals"];

const map = (array, callback) => {
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

const results1 = map(lhlProjects, project => project[0]);
console.log(results1);


