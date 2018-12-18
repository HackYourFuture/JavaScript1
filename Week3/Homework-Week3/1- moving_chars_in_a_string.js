let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString = myString.replace(/,/g, " "); // use regular expression to replase all matches
myString = newString;
console.log(myString);