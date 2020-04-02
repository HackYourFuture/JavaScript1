'use strict';
function creditCardValidator(TheSerial) {
  if (cardlength(TheSerial) !== 16) {
    return 'Fout: your Credit card number is not 16 digits';
  } else if (isNaN(TheSerial)) {
    return 'Invalid characters!';
  } else if (isTheSame(TheSerial)) {
    return 'Just one type of number';
  } else if (isGreaterThan16(TheSerial)) {
    return 'sum less than 16';
  } else if (isOdd(TheSerial)) {
    return 'Odd final number';
  } else {
    return 'Thank you .. that is a valid credit card number';
  }
}

function cardlength(TheSerial) {
  return TheSerial.toString().length;
}

function isTheSame(TheSerial) {
  let counter = 0;
  let stringOfNumber = TheSerial.toString();
  for (let index in stringOfNumber) {
    if (stringOfNumber[index] == stringOfNumber[0]) {
      counter++;
    }
  }
  if (counter == 16) {
    return true;
  }
  return false;
}
function isGreaterThan16(TheSerial) {
  let sum = 0;
  while (TheSerial) {
    sum += TheSerial % 10;
    TheSerial = Math.floor(TheSerial / 10);
  }
  if (sum <= 16) {
    return true;
  }
  return false;
}
function isOdd(TheSerial) {
  if (TheSerial % 2 == 1) {
    return true;
  }
  return false;
}
console.log(creditCardValidator('9999777788880000'));
console.log(creditCardValidator('6666666666661666'));
console.log(creditCardValidator('a92332119c011112'));
console.log(creditCardValidator('4444444444444444'));
console.log(creditCardValidator('1111111111111110'));
console.log(creditCardValidator('6666666666666661'));
