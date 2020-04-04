"use strict";

function calcAnotherThing(cardNumber) {
  if (cardNumber.length === 16) {
    if (!isNaN(cardNumber)) {
      if (cardNumber[cardNumber.length - 1] % 2 === 0) {
        if (sumNumber(cardNumber) > 16) {
          if (checkDifferentDidgits(cardNumber)) {
            console.log(`Your card ${cardNumber} is valid`);
          } else {
            console.log(`Your card ${cardNumber} is not valid all same`);
          }
        } else {
          console.log(`Your card ${cardNumber} is not valid has invalid sum`);
        }
      } else {
        console.log(
          `Your card ${cardNumber} is not valid final digit must be even`
        );
      }
    } else {
      console.log(
        `Your card ${cardNumber} is not valid should contain only digits`
      );
    }
  } else {
    console.log(`Your card ${cardNumber} is not valid must e 16 digits`);
  }
}

function sumNumber(cardNumber) {
  let sum = 0;

  for (let i = 0; i < cardNumber.length; i++) {
    sum += Number(cardNumber[i]);
  }
  return sum;
}
// function checks if input has more than 1 type( this function sponsored by Noer)
function checkDifferentDidgits(cardNumber) {
  //initially i assume  no different digits
  let hasDiffDigits = false;

  //compare idex position
  for (let i = 0; i < cardNumber.length; i++) {
    if (!(i + 1 === cardNumber.length)) {
      //check if they are the same
      if (cardNumber[i] === cardNumber[i + 1]) {
        hasDiffDigits = false;
      } else {
        hasDiffDigits = true;
        return hasDiffDigits;
      }
    }
  }
  return hasDiffDigits;
  //console.log(checkDifferentDidgits(cardNumber));
}
//checkDifferentDidgits("4444444444444444")
calcAnotherThing("9999777788880000");
calcAnotherThing("6666666666661666");
calcAnotherThing("a92332119c011112");
calcAnotherThing("4444444444444444");
calcAnotherThing("1111111111111110");
calcAnotherThing("6666666666666661");