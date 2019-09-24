'use strict';
let myString = 'hello,this,is,a,difficult,to,read,sentence';
let newString = myString.replace(/,/g, ' ');

console.log( newString );