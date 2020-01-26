'use strict';

const arrayone = ['hello', 123, true, { name: 'Huseyin' }];
console.log(arrayone.length);
const arraytwo = ['hi', 789, false, 'eagle', 5410, 1977, 'tuna'];
console.log(arraytwo.length);
if (arrayone.length == arraytwo.length) {
  console.log(' they are the same');
} else {
  console.log('two different sizes');
}
