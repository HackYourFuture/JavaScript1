let myString = 'hello,this,is,a,difficult,to,read,sentence';

console.log("The length of myString is " + myString.length + " letters.");

myString = myString.replace(/,/g, " ");
console.log(myString);