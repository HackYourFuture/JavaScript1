'use strict'
let myString = "hello,this,is,a,difficult,to,read,sentence";
///the sentence will show up with comas between all the words
console.log("the length of this sentence is " + myString.length);
///will show the length of the sentence
comaoff = myString.replace(/,/g," ");
///now we gonna show the sentence without the comas
console.log(comaoff)