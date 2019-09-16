'use strict'
// 1. Declare a variable `myString` and assign a string to it. Use your full name, including spaces, as the content for the string.
let myString = "Mustafa TUNCER";
// 2. Write a `console.log` statement in which you explain in words _what you think_ the value of the string is.
console.log("It should print \"Mustafa TUNCER\"");
// 3. Now `console.log` the variable `myString`.
console.log(myString);
// 4. Now reassign to the variable `myString` a new string.
myString = myString.split(' ')[0];
// 5. Just like what you did before write a `console.log` statement that explains in words _what you think_ will be logged to the console.
console.log("It should print \"Mustafa\"");
// 6. Now console.log `myString` again.
console.log(myString);
