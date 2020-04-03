"use strict";
function validator(cardNumber) {
  // find the the sum of the digits
  var sum = 0;
  var x = cardNumber;
  while (x) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }

  // looking for if the digits are the same
  var allSame = true;
  var strCardNumber = cardNumber.toString();
  var firstChar = strCardNumber[0];
  for (var i = 0; i < strCardNumber.length; i++) {
    if (strCardNumber[i] !== firstChar) {
      allSame = false;
      break;
    }
  }

  //if blocks
  if (allSame === true) {
    return (
      cardNumber + " is an invalid number, all of the digits cannot be the same"
    );
  } else if (sum <= 16) {
    return (
      cardNumber +
      " is an invalid number, the sum of all the digits must be greater than 16"
    );
  } else if (typeof cardNumber !== "number") {
    return (
      cardNumber +
      " is an invalid number, card number can only consist of numbers"
    );
  } else if (cardNumber.toString().length !== 16) {
    return cardNumber + " is an invalid number, card number must be 16 digits";
  } else if (cardNumber % 2 !== 0) {
    return (
      cardNumber +
      " is an invalid number, the final digit of the card number must be even"
    );
  } else {
    return cardNumber + " is a valid number";
  }
}

console.log(validator(113840308430));
console.log(validator("a92*32h19c011t12"));
console.log(validator(4444444444444444));
console.log(validator(1669196616969961));
console.log(validator(110110111011110));
console.log(validator(6666666666661666));

/*
In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
*/
