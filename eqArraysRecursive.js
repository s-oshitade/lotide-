/**
 * Takes in 2 arrays and returns true if the arrays are equal and false otherwise. Supports sub-arrays.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
 const assertEqual = require('./assertEqual');

 const eqArraysRecursive = function(arr1, arr2) {
   if (arr1.length !== arr2.length || !Array.isArray(arr1) || !Array.isArray(arr2)) {
     return false;
   }
 
   for (let index = 0; index < arr1.length; index++) {
     if (!Array.isArray(arr1[index]) || !Array.isArray(arr2[index])) {
       if (arr1[index] !== arr2[index]) {
         return false;
       }
     }
     if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
         if(!eqArraysRecursive(arr1[index], arr2[index])){
           return false;
         }
     }
   }
   return true;
 };
 
 //  Test cases
 assertEqual(eqArraysRecursive([1, 2, 3], [1, 2, 3]), true); // => true
 assertEqual(eqArraysRecursive([1, 2, 3], [3, 2, 1]), false); // => false
  
 assertEqual(eqArraysRecursive(["1", "2", "3"], ["1", "2", "3"]), true); // => true
 assertEqual(eqArraysRecursive(["1", "2", "3"], ["1", "2", 3]), false); // => false
 
 console.log("____Nested arrays tested below____");
 
 assertEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4]]), true); // => true
 
 assertEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
 assertEqual(eqArraysRecursive([[2, 3], [4]], [[2, 3], 4]), false) // => false
  
 module.exports = eqArraysRecursive;
  
  