"use strict";

function calculateDogAge(puppyAge = 0) {
    return "Your doggie is " + puppyAge * 7 + " years old in dog years!";
}
console.log(calculateDogAge(2));

// another way (arrow function)
let calculatePuppyAge = x => {
    return `Your doggie is ${x*7} years old in dog years!`;
};
console.log(calculatePuppyAge(2));