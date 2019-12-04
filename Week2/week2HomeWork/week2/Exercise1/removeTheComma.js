"use strict";
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
const str = myString.replace(/,/g, " ");
console.log(str);