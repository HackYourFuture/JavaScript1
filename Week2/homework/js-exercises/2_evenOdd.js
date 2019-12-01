"use strict";

// 1. Create a `for` loop, that iterates from 0 to 20.
for (let i = 0; i <= 20; i++) {
  // 2. Create a conditional statement that checks if the value of the counter variable is odd or even.
  if (i % 2) {
    // 3. If it's odd, log to the console `The number [PUT_NUMBER_HERE] is odd!`.
    console.log(`The number ${i} is odd!`);
  }
  // 4. If it's even, log to the console `The number [PUT_NUMBER_HERE] is even!`.
  else {
    console.log(`The number ${i} is even!`);
  }
}

// if(i%2) when the result is 0, it's means 0 is false, so the condition is for odd numbers ==>> 1,3,5,7,9...
