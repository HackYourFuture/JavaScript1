'use strict'
// Declare all variables
const str1="My first string";
const str2="My second string";
const obj1={name:"object1", number:1};
const obj2={name:"object2", number:2};
// Check data type
console.log(typeof str1);
console.log(typeof obj1);
// Check if data type is the same
typeof(str1) === typeof(str2) ? console.log('SAME TYPE') : console.log("Not the same"); 
typeof(str1) === typeof(obj1) ? console.log('SAME TYPE') : console.log("Not the same"); 
typeof(str1) === typeof(obj2) ? console.log('SAME TYPE') : console.log("Not the same"); 
typeof(str2) === typeof(obj1) ? console.log('SAME TYPE') : console.log("Not the same"); 
typeof(str2) === typeof(obj2) ? console.log('SAME TYPE') : console.log("Not the same"); 
typeof(obj1) === typeof(obj2) ? console.log('SAME TYPE') : console.log("Not the same"); 
typeof(str1) !== typeof(obj2) ? console.log('Not the same') : console.log("SAME TYPE"); 
typeof(str2) !== typeof(obj2) ? console.log('Not the same') : console.log("SAME TYPE"); 
