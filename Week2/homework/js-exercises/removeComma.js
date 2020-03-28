"use strict";
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
let i;
for (i of myString){
  myString = myString.replace(/,/g," ");
}
console.log(myString);