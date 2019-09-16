'use strict'
// 1. Declare 4 variables: 2 must be `strings` and 2 must be `objects`
let s1 = "a";
let s2 = "b";
let o1 = null;
let o2 = {};
// 2. Create 8 conditional statements, where for each you check if the data type of one variable is the same as the other
console.log(typeof s1 === typeof s2);
console.log(typeof s1 === typeof o1);
console.log(typeof s1 === typeof o2);
console.log(typeof s2 === typeof o1);
console.log(typeof s2 === typeof o2);
console.log(typeof o1 === typeof o2);
console.log(typeof s1 === typeof s1);
console.log(typeof s2 === typeof s2);
// 3. Find out how to check the type of a variable
console.log("To find the type of a variable, we use 'typeof'");
// 4. Write 2 `console.log` statements to log the type of 2 variables, each with a different data type
console.log(typeof s1);
console.log(typeof o1);
// 5. Now compare the types of your different variables with one another
console.log(typeof s1 === typeof s2);
// 6. Log `Not the same...` when the types are different
console.log(typeof s1 === typeof o1 ? "The same" : "Not the same...");
