// 1.1 Add the string to your file and log it.
// 1.2 Log the length of myString.
// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
// 1.4 Log myString to see if you succeeded.


let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log("Length of myString is: " + myString.length);

// using replace()
myString = myString.replace(/,/g , " ");
console.log(myString);


// using split() and join()
myString = "hello,this,is,a,difficult,to,read,sentence";

const myArray = myString.split(","); // split the string from commas and make an array
myString = myArray.join(" "); // join elements together and seperate them with space

console.log(myString);
