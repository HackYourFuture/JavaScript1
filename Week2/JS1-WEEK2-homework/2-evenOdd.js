// Exercise 2: The even/odd reporter

// Report whether or not a number is odd/even!
// Create a for loop, that iterates from 0 to 20.
// Create a conditional statement that checks if the value of the counter variable is odd or even.
// If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
// If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.

"use strict";

for (let i = 0; i <= 20; i++) {

  if (i % 2) {

    console.log('The number ' + i + ' is odd!');
  } else {
    console.log('The number ' + i + ' is even!');
  }
}