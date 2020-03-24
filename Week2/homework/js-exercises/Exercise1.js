'use strict';

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

let newString = myString.replace(new RegExp(',', 'g'), ' ');
console.log(newString);