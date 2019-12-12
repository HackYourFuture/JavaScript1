const vaildMassege = "your number is valid";
const inVaildMassege = "your number is Invalid";
let massege;

function checkIfVaild(card) {
    if (sumCardDigits(card) <= 16) {
        massege = vaildMassege + " the sum is smaller than 16";
    } else if (checkCardEven(card) != 0) {
        massege = inVaildMassege + " your number is not even";
    } else if (checkCardLength(card) === false) {
        massege = inVaildMassege + "your number is to short";
    } else if (checkSame(card) === false) {
        massege = inVaildMassege + "your number is not correct";
    } else {
        massege = vaildMassege;
    }
    return massege;
}

console.log(checkIfVaild(1234567890123486));

// check the sum of card is more than 16
function sumCardDigits(card) {
    let sum = 0;
    let convert = String(card);
    let toArray = Array.from(convert);
    let massege;
    for (let i = 0; i < toArray.length; i++) {
        sum = sum + Number(toArray[i]);
    }
    return sum;
}
//to check if the last number of card is even
function checkCardEven(card) {
    arr = String(card).split("");
    let check;
    let last_element = arr[arr.length - 1];
    console.log(last_element);
    let value = last_element % 2;
    return value;
}
//check the card length more than 16 digits
function checkCardLength(card) {
    let cardLenghth = String(card);
    let LenghthCheck = cardLenghth.length;
    console.log(LenghthCheck);
    let check;
    if (LenghthCheck === 16) {
        check = true;
    } else {
        check = false;
    }
    return check;
}
// to check if all the digits is same,if all digits is numbers
function checkSame(card) {
    const toString = String(card);
    let toArray = toString.split("");
    console.log(toArray);
    let checkTrue;
    let IfAllSame = toArray.every(function(val, i, arr) {
        return val === toArray[0];
    });
    console.log(IfAllSame);
    if (IfAllSame == true) {
        checkTrue = false;
    } else if (IfAllSame === false) {
        checkTrue = true;
    } else if (!Number.isInteger(Number(toArray))) {
        checkTrue = true;
    } else {
        checkTrue = false;
        console.log(checkTrue);
    }
    return checkTrue;
}