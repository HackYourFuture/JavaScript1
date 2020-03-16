"use strict";
function validateCard(cardNumber) {
  // Initializing an empty array that will be used to check the sum of the cardNumber
  let cardsum = [];
  // Checking if the length of the cardNumber is 16
  if (cardNumber.length !== 16) {
    console.log(`The card number #${cardNumber} must consist of 16 digits!`);
  } else {
    for (let i = 0; i < cardNumber.length; i++) {
      // Checking if each number IS a number, if it is, it will be pushed to the empty cardsum array to check the sum
      if (isNaN(parseInt(cardNumber[i]))) {
        console.log(
          `Your card number #${cardNumber} should contain only digits!`
        );
        return false;
      } else {
        cardsum.push(cardNumber[i]);
      }
    }
    // Turning the array of separate numbers into a single string with + between them so it can be evaluated
    if (eval(cardsum.join("+")) <= 16) {
      console.log(`Your card number #${cardNumber} has invalid sum!`);
    } else {
      // Checking the last digit if it is even or odd
      if (cardNumber[cardNumber.length - 1] % 2 != 0) {
        console.log(`Your card number #${cardNumber} has invalid last digit!`);
      } else {
        // Checking if all digits are not the same (source: https://stackoverflow.com/questions/41192854/function-that-checks-whether-all-characters-in-a-string-are-equal-javascript-h)
        if (cardNumber.split("").every(digit => digit === cardNumber[0])) {
          console.log(
            `The digits in your card number #${cardNumber} can't be the same!`
          );
        } else {
          console.log(`Your credit card #${cardNumber} is valid!`);
        }
      }
    }
  }
}
validateCard("9999777788880000");
validateCard("6666666666661666");
validateCard("a92332119c011112");
validateCard("4444444444444444");
validateCard("1111111111111110");
validateCard("6666666666666661");
