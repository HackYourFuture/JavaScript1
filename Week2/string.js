console.log('String and Array challenges');
console.log(`1. Strings!`); // how to remove commas in a string
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);
console.log(myString.length);
myString = myString.split(',');
myString = myString.join(' ');
console.log(myString);