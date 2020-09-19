// Exercise 1 remove the comma

'use strict';
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);   //print the length of myString out
myString = myString.replace(/[,]/g ," ");  //replace all commas with space
console.log(myString);