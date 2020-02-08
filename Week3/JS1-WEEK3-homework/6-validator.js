'use strict'

// In this project you'll write a script that validates whether or not a credit card number is valid.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
// 9999777788880000
// 6666666666661666
// The following credit card numbers are invalid:
// a92332119c011112 (invalid characters)
// 4444444444444444 (only one type of number)
// 1111111111111110 (sum less than 16)
// 6666666666666661 (odd final number)
// These are the requirements your project needs to fulfill:
// Make a JavaScript file with a name that describes its contents
// Create a function with a descriptive name, for example: doSomething or calcAnotherThing
// Write at least 2 comments that explain to others what a line of code is meant to do
// Make the return value of the function a template string, so you can insert variables!
// Use node from the command line to test if your code works as expected


function validateCardNumber(cardNum) {
  // must be 16 digits///
  if (cardNum.length !== 16) {
    return `WARNING: Credit card number must be 16 digits!`;
  }

  // must be numbers ///
  let numbers = [];
  if (typeof cardNum === 'number') {
    numbers = ('' + cardNum).split('');
  } else if (typeof cardNum === 'string') {
    numbers = cardNum.split('');
  } else {
    return `WARNING: INVALID Card Number!`;
  }
  for (const character of numbers) {
    if (isNaN(character)) {
      return `WARNING: Credit card number digits must be numbers!`;
    }
  }

  // the digits cannot be the same number///
  // sum of all the digits must be greater than 16///
  let digits = [];
  for (let i = 0; i < 10; ++i) {
    digits.push(0);
  }

  let sumOfAllDigits = 0;
  for (const character of numbers) {
    const number = +character;
    digits[number] += 1;
    sumOfAllDigits += number;
  }

  if (sumOfAllDigits <= 16) {
    return `WARNING: Sum of your credit card number digits must be greater than 16!`;
  }

  for (const differenceTimes of digits) {
    if (differenceTimes === 16) {
      return `WARNING: Digits of credit card number cannot be the same!`;
    }
  }

  // final digit of the card number must be even///

  if (cardNum % 2 === 1) {
    return `WARNING: Credit card number must be even`;
  }

  return `CONGRATULATIONS! IN THE END YOU, FIGURED OUT TO WRITE CORRECT CREDIT CARD NUMBER: ${cardNum} IS VALID`;
}

console.log(validateCardNumber('7774567890123445533')) ; // WARNING: Credit card number must be 16 digits!
console.log(validateCardNumber('S4F45s7430m123d5')); // WARNING: Credit card number digits must be numbers!
console.log(validateCardNumber('1011110000110111')); // WARNING: Sum of your credit card number digits must be greater than 16!
console.log(validateCardNumber('3333333333333333')); // WARNING: Digits of credit card number cannot be the same!
console.log(validateCardNumber('8888888888665665')); // WARNING: Credit card number must be even
console.log(validateCardNumber('8234567890163546')); // CONGRATULATIONS!

