//  ===EXERCISE 10===

'use strict';

console.log('EXERCISE 10 - Compare arrays');

let x = ['my array', 1, true, null];
console.log(x.length); // 4

let y = new Array(7);
console.log(y.length); // 7

if (x.length === y.length) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes');
}
