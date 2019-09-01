let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
// g is for global if there is no g, it will replace only the first one,
// if we do not want to use g, then we have to make a loop.
newString = myString.replace(/,/g, " "); 
console.log(newString);