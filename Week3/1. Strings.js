/***********************************  Strings ***************************************************/

const myString = "hello,this,is,a,difficult,to,read,sentence";

//  Add the string to your file and log it.
console.log(myString); // hello,this,is,a,difficult,to,read,sentence


//  Log the length of myString.
console.log(myString.length); // 42

//  Replace commas with spaces ????
let myString2 = myString.replace(/,/g , ' ');
console.log(myString2);  // hello this is a difficult to read sentence


