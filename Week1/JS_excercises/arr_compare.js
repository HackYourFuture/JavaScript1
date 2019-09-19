'use strict';

// Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
let arr1 = [1, 2, 3, 4];
let arr2 = ['one', 'two', 'three', false, true, 6, 7];

// Find out how to get the length of each array. Write a console.log statement that shows the length of each array
console.log('The length of the first array is: ' + arr1.length);
console.log('The length of the second array is: ' + arr2.length);

// Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes
if (arr1.length == arr2.length) {
  console.log('they are the same');
} else {
  console.log('two different sizes');
}

// ternary operators
console.log(arr1.length == arr2.length ? 'they are the same' : 'two different sizes');
