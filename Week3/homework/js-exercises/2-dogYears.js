"use strict";

// Exercise 2: Dog years
// You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge.
// It takes 1 argument: your puppy's age (number).
// Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
// Call the function three times with different sets of values.

function calculateDogAge(age) {
    const calculatedValue = age * 7;
    return `Your doggie is ${calculatedValue} years old in dog years!`;
}
console.log(calculateDogAge(35));


///////////////////////////////////

// function calculateDogAge(age) {
//     const calculatedValue = age * 7;
//     if (typeof age !== "number") {
//       return "Please write value as a number...";
//     } else {
//       return `Your doggie is ${calculatedValue} years old in dog years!`;
//     }
//   }

//   console.log(calculateDogAge(35));