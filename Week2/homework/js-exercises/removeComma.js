'use strict';

//variable declaretion 
let myString = "hello,this,is,a,difficult,to,read,sentence";

//print the length of the string 
console.log(`string length : ${myString.length}`);

//declare variable and using replacement method to remove the comma  
let removeComma=myString.replace(/,/g , ' ');

//printing the string with no comma
console.log(removeComma);