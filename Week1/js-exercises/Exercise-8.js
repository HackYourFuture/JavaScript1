//  ===EXERCISE 8===

'use strict';

console.log('EXERCISE 8');

let myFirstStr = 'This is the best';
let mySecondStr = 'Like the others';
let myFirstObj = [42, 'Hello', true];
let mySecondObj = [42, 6];

console.log(typeof myFirstStr);
console.log(typeof mySecondStr);
console.log(typeof myFirstObj);
console.log(typeof mySecondObj);

if (typeof myFirstStr === typeof mySecondStr) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same...');
}

if (typeof myFirstStr === typeof myFirstObj) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same...');
}

if (typeof myFirstStr === typeof mySecondObj) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same...');
}

if (typeof mySecondStr === typeof myFirstObj) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same...');
}

if (typeof mySecondStr === typeof mySecondObj) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same...');
}

if (typeof myFirstObj === typeof mySecondObj) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same...');
}
