# @s-oshitade/Lotide- | ver 1.0.4

A mini clone of the [Lodash](https://lodash.com) library.
## Author
[Seun Oshitade](https://www.linkedin.com/in/olu-oshitade-53001120b/)
## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @s-oshitade/lotide-`

**Require it:**

`const _ = require('@s-oshitade/lotide-');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Function that takes in 2 arrays and returns true if they are equal and false otherwise.
* `assertEqual`: Function that takes in 2 values and returns true if they are equal and false otherwise.
* `assertObjectsEqual`: Function that takes in 2 objects and returns true if they are equal and false otherwise.
* `countLetters`: Function that takes in a sentence and returns a count of each of the letters in the sentence.
* `countOnly`: Function that takes in a collection of string items and returns counts for a specific subset of those items.
* `eqArrays`: Function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `eqArraysRecursive`: Function that takes in 2 arrays and returns true if the arrays are equal and false otherwise. Supports sub-arrays.
* `eqObjects`: Function that takes in 2 objects and returns true if they are equal and false otherwise.
* `eqObjectsRecursive`: Function that takes in 2 objects and returns true if they are equal and false otherwise. Supports nested objects.
* `findKey`: Function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `findKeyByValue`: Function that takes in an object and a value and returns the first key that corresponds to that value.
* `flatten`: Function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `head`: Function that takes in an array and returns the first element in the array.
* `letterPositions`: Function that takes in a string and returns all indices of letter positions in the string.
* `map`: Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `middle`: Function that takes in an array and returns middle most element of the array.
* `tail`: Function that takes in an array and returns everything except the first element of the array.
* `takeUntil`: Function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `without`: Function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.