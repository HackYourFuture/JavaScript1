"use strict";
let myString = "hello,this,is,a,difficult,to,read,sentence";
let a = myString.length;
console.log(a);
let b = myString.replace(/,/g, " ");
console.log(b);
