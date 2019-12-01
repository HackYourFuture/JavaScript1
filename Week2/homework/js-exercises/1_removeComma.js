"use strict";

// 1. Add the variable to your file.
let myString = "hello,this,is,a,difficult,to,read,sentence";
// 2. Log the length of `myString`.
console.log(myString.length);
/* 3. The commas make that the sentence is quite hard to read. 
Find a way to remove the commas from the string and replace them with spaces. (use Google!)
First way */
console.log(myString.split(",").join(" "));
//Second way
myString = myString.replace(/,/g, " ");
// 4. After replacing the commas, log `myString` to see if you succeeded.
console.log(myString);
