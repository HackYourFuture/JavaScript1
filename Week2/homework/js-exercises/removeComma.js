'use strict'
// let myString = 'hello,this,is,a,difficult,to,read,sentence';
// Add the variable to your file.
// Log the length of myString.
// The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces. (use Google!)
// After replacing the commas, log myString to see if you succeeded.

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);
myString = myString.replace(/,/g," ");
console.log(myString);