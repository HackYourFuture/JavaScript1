'use strict'
let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString.length);

const regex = /,/g;
myString = myString.replace(regex, ' ');

console.log(myString);
