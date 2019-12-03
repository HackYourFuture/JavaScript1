'use strict';

// let s = 'Hello'.toLowerCase(); // Statement
// let l = s.length; // Statement

// function sum(a, b) {
//   return a + b;
// } // Statement
// let max = function(a, b) {
//   return a > b ? a : b;
// }; // Statement

// let s1 = sum(4, 5); // Statement //
// let s2 = 4 + 5; // Statement

// if (s2 == s1) {
//   console.log('same');
// } else {
//   console.log('not same');
// } // Statement

// let a = true;
// let b = falsee;
// let c = false;
// if (a && (b || c)) {
//   console.log('I am Abuzer');
// }

// let shoes = green;
// let shirt = gray;
// let pant = pink;

// if (pant == 'green' && shoes == 'green' && shirt == 'green') {
//   console.log(true);
// }
// if (pant == 'green' || shoes == 'green' || shirt == 'green') {
//   console.log(true);
// }
// if (pant == 'green') {
//   console.log(true);
// }

const month = 'June';
let season = '';

switch (month) {
  case 'December':
  case 'January':
  case 'February':
    season = 'Winter';
    break;
  case 'March':
  case 'April':
  case 'May':
    season = 'Spring';
    break;
  case 'June':
  case 'July':
  case 'August':
    season = 'Summer';
    break;
  case 'Semtember':
  case 'October':
  case 'November':
    season = 'Autumn';
    break;
  default:
    season = `Month ${month} is unknown.`;
}
console.log(season);
