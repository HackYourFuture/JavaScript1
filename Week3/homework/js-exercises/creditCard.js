"use strict";
function creditCardValidator(theNumber) {
  if (cardlength(theNumber) !== 16) {
    return "Fout: your Credit card number is not 16 digits";
  } else if (isNaN(theNumber)) {
    return "Fout: Invalid characters!";
  } else if (isSame(theNumber)) {
    return "Fout: Just one type of number";
  } else if (isGreaterThanSixteen(theNumber)) {
    return "Fout: some of your credit card numbers are less than 16";
  } else if (isOdd(theNumber)) {
    return "Fout: Odd final number";
  } else {
    return "that is true your credit card is valid now";
  }
}

function cardlength(theNumber) {
  return theNumber.toString().length;
}

function isSame(theNumber) {
  let counter = 0;
  let stringOfNumber = theNumber.toString();
  for (let index in stringOfNumber) {
    if (stringOfNumber[index] == stringOfNumber[0]) {
      counter++;
    }
  }
  if (counter == 16) {
    return true;
  }
  return false;}
  function isGreaterThanSixteen(theNumber) {
    let sum = 0;
    while (theNumber) {
      sum += theNumber % 10;
      theNumber = Math.floor(theNumber / 10);
    }
    if (sum <= 16) {
      return true;
    }
    return false;
  }
  function isOdd(theNumber) {
    if (theNumber % 2 == 1) {
      return true;
    }
    return false;
  }
  console.log(`Example 1: ${creditCardValidator("123456789123456")}`);
  console.log(`Example 2: ${creditCardValidator("14852hdkio124780")}`);
  console.log(`Example 3: ${creditCardValidator("7512014785201439")}`);
  console.log(`Example 4: ${creditCardValidator("1111111111000000")}`);
  console.log(`Example 5: ${creditCardValidator("6666666666666666")}`);
  console.log(`Example 6: ${creditCardValidator("4821059100451970")}`);