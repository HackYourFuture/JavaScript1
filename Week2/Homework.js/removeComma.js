'use strict';

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);

let myNewString = myString.replace(/,/g, ' '); //G is used for making it global
console.log(myNewString);
