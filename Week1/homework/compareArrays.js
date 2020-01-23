/*
Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
Find out how to get the length of each array. Write a console.log statement that shows the length of each array
const array = ["hello", 123, true, { name: "Noer" }];

console.log('The length of the array is...' + ...);
Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes
*/

"use strict";

let array1 = ['merhaba', 321, false, {name: 'Abdulkadir'}];
let array2 = ['My Favorite Car', 678, true, {carName: 'Tesla', model: 1 , color:'Red'},'Learn how to code', 2020, {myFavoriteCity: 'Amsterdam'}];

console.log(array1.length);
console.log(array2.lenght);

if (array1.length === array2.length) {
  console.log('They are the same!');
}
else {
  console.log('Two different sizes!');
}