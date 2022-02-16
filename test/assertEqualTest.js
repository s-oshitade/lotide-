const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Lighthouse Labs"); //Pass
assertEqual("Lighthouse Labs", "Bootcamp"); //Fail
assertEqual(1, 1); //Pass
assertEqual(1, 2); //Fail
assertEqual(undefined, undefined); //Pass
assertEqual(null, null); // Pass
assertEqual(Number.isNaN(NaN), Number.isNaN(NaN)); //Pass
assertEqual(Number.isNaN(7), Number.isNaN(7)); //Pass
assertEqual(Number.isNaN("I love to code!"), Number.isNaN("I love to code!")); //Pass
assertEqual(NaN, NaN); //Fail - NaN is the only value in JavaScript which is not equal to itself.