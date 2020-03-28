let myString = "hello,this,is,a,difficult,to,read,sentence";

myString = myString.replace(/,/g, ' '); //we replace 'comma' with 'white space'

console.log(myString);