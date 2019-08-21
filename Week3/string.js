// Strings Question 1

//  Consider the following string:

const myString = 'hello,this,is,a,difficult,to,read,sentence';

// Q: Add the string to your file and log it.

// Solution

console.log(myString);

// Log the length of myString.

// Solution : we use length property for the solution.

console.log(myString.length);

// Q:The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.

// Solution

const myNewString = 'hello,this,is,a,difficult,to,read,sentence';

let regex = /,/gi;

console.log(myNewString.replace(regex, ' '));
