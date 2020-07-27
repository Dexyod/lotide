# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dexyod/lotide`

**Require it:**

`const _ = require('@dexyod/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `map(array, callback)`: The map function will return a new array based on the results of the callback function.
- `takeUntil(array, callback)`: The function will return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
- `findKey(object, callback)`: It should scan the object and return the first key for which the callback returns a truthy value.
- `middle(array)`: The middle function should return an array with only the middle element(s) of the provided array.
- `countOnly(array, object)`: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
- `countLetters(string)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `letterPositions(string)`: The letterPositions function will return all the indices (zero-based positions) in the string where each character is found.
- `findKeyByValue(object, value)`: The findKeyByValue function should scan the object and return the first key which contains the given value.
- `eqObjects(obj1, obj2)`: The function eqObjects which will take in two objects and returns true or false, based on a perfect match.
- `assertObjectsEqual(actual, expected)`: The assertObjectsEqual will take in two objects and console.log an appropriate message to the console if they are equal or not.
- `eqArrays(array1, array2)`: The eqArrays function takes in two arrays and returns true or false, based on a perfect match.
- `assertArraysEqual(actual, expected)`: The assertArraysEqual will take in two arrays and console.log an appropriate message to the console if they are equal or not.
- `without(array1, array2)`: The without function will return a subset of a given array, removing unwanted elements.
- `flatten(array1)`: The function flatten will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- `assertEqual(actual, expected)`: The assertEqual function will take in two arguments and console.log an appropriate message to the console if they are equal or not.
- `head(array)`: The head function takes in an array and retrieves the first element from the array. This is often referred to as the "head" of the array.
- `tail(array)`: The tail function returns the "tail" of an array: everything except for the first item (head) of the provided array.
