const vaildMassege = "your number is valid";
const inVaildMassege = "your number is Invalid";

function checkIfVaild(card) {
    let messege; // to return message explain why the card is not correct
    if (sumCardDigits(card) <= 16) {
        massege = inVaildMassege + " the sum is smaller than 16";
    } else if (checkCardEven(card) != 0) {
        massege = inVaildMassege + " your number is not even";
    } else if (checkCardLength(card) === false) {
        massege = inVaildMassege + " your number is to 16 digit";
    } else if (checkSame(card) === false) {
        massege = inVaildMassege + "your number is not correct";
    } else {
        massege = vaildMassege;
    }
    return massege;
}

console.log(checkIfVaild(123456789012348));

// check the sum of card is more than 16
function sumCardDigits(card) {
    let sum = 0;
    const cardAsString = String(card);
    for (let i = 0; i < cardAsString.length; i++) {
        sum = sum + Number(cardAsString[i]);
    }
    return sum;
}

//to check if the last number of card is even
function checkCardEven(card) {
    arr = String(card).split("");
    let lastElement = arr[arr.length - 1];
    let value = lastElement % 2;
    return value;
}

//check the card length more than 16 digits
function checkCardLength(card) {
    return String(card).length === 16;
}
// to check if all the digits is same,if all digits is numbers
function checkSame(card) {
    const toString = String(card);
    let cardAsArray = toString.split("");
    let checkTrue;
    let IfAllSame = cardAsArray.every(function(val, i, arr) {
        return val === cardAsArray[0];
    });
    if (IfAllSame == true) {
        checkTrue = false;
    } else {
        checkTrue = true;
    }
    if (!Number.isInteger(Number(cardAsArray))) {
        checkTrue = true;
    } else {
        checkTrue = false;
    }
    return checkTrue;
}