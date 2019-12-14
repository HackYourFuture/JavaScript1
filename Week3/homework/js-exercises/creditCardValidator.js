'use strict'
function creditCardValidator(num) {
//  check the type
  if (typeof num !== "number") {
    return false;
  }
//  check 16 digits
  const string = num.toString();
  if (string.length !== 16) {
    return false;
  }

//   check sum of all the digits must be greater than 16
  let sum = 0;
  string.split("").forEach(e => (sum += Number(e)));
  if (sum < 17) {
    return false;
  }
//   check The final digit must be even
  if (string.charAt(15) % 2 !== 0) {
    return false;
  }
//   check if it only one type of number
  const arr = string.split("").filter(e => Number(e) !== sum / 16);
  if (arr.length === 0) {
    return false;
  }
  return true;
}
console.log(creditCardValidator(121231423));
console.log(creditCardValidator(4444444444444446));
console.log(creditCardValidator(1111111111111110));