'use strict'
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
// Replace method without regular expression
// for (let i=0;i<myString.length;i++){
//   myString = myString.replace(",", " ");
// }
//replace with regular expression
myString = myString.replace(/,/g, " ");


console.log(myString);