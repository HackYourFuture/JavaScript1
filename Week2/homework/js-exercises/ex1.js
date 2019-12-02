//Remove the comma from string
let myString = 'hello,this,is,a,difficult,to,read,sentence';
//Log the length of myString
console.log(myString.length);
//remove the commas from the string and replace them with spaces
myString = myString.replace(/,/g, ' ');
//log myString with no comma
console.log(myString);
