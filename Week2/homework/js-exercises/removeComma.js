'use strict'

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
myString = myString.replace(/,/g, " "); // g, “global”, will remove all the commas in your string.
console.log(myString);