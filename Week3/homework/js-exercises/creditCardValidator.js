"use strict";

function creditCardValidator(cardNumber = "") {
    
    const arrayOfDigits = Array.from(String(cardNumber), Number);

    if (typeof cardNumber !== "number" ||
        arrayOfDigits.length !== 16 ||
        arrayOfDigits.reduce((a, b) => a + b) < 16 ||
        arrayOfDigits.pop() % 2 != 0 ||
        allEqual(arrayOfDigits)) {

        return `Credit card ${cardNumber} is invalid!`;
    } else {

        return `Credit card ${cardNumber} is valid!`;
    }

}

const allEqual = arr => arr.every(v => v === arr[0]);

console.log(creditCardValidator(9999777788880000));
console.log(creditCardValidator(6666666666661666));
console.log(creditCardValidator("a92332119c011112"));
console.log(creditCardValidator(1111111111111110));
console.log(creditCardValidator(6666666666666661));