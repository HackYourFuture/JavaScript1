'use strict'

let myString = 'hello,this,is,a,difficult,to,read,sentence';

console.log(myString.length);


// using Regex
let re = /,/g ;
let newString1 = myString.replace(re, " ");
console.log(newString1);

// using built in commands
let newString2 = myString.split(',').join(' ');
console.log(newString2)
