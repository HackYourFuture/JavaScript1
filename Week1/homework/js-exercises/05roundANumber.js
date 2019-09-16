'use strict'
// 1. Declare a variable `z` and assign the number 7.25 to it.
let z = 7.25;
// 2. Write a `console.log` statement in which you log the value of `z`.
console.log(z);
// 3. Declare another variable `a` that has the value of `z` but rounded to the nearest integer.
let a = Math.round(z);
// 4. Write a `console.log` statement in which you log the value of `a`.
console.log(a);
// 5. So now we have `z` and `a` find a way to compare the two values and store the highest of the two in a new variable.
let j = a > z ? a : z;
// 6. Write a `console.log` statement in which you log the value of the highest value.
console.log(j);
