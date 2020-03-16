'use strict'
// I think there is a typo in the assignment, because it says that the argument is puppy's age and the return string is the doggie's age in dog years, while the conversion should be to human years.
const calculateDogAge = dogAge => `Your doggie is ${dogAge*7} years old in human years!`;


console.log(calculateDogAge(1));
console.log(calculateDogAge(5));
console.log(calculateDogAge(12));