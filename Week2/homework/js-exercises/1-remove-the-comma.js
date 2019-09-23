'use strict';

let myString = 'hello,this,is,a,difficult,to,read,sentence';

// to get othe length of the string 
let myNewString = myString.length;

// the output is characters
console.log(myNewString);

// replace the comma with space

let removeCommaString = myString.replace(/,/g,' ');

console.log(removeCommaString);