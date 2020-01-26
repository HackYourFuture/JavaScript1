'use strict';

let x = 9;
let y = 67;
let a = { animal1: 'eagle' };
let b = { animal2: 'tiger' };
if (typeof x === typeof y) {
  console.log('same type ');
} else {
  console.log('different type ');
}

if (typeof a === typeof y) {
  console.log('same type ');
} else {
  console.log('different type ');
}
if (typeof x === typeof a) {
  console.log('same type ');
} else {
  console.log('different type ');
}
if (typeof y === typeof b) {
  console.log('same type ');
} else {
  console.log('different type ');
}
if (typeof x === typeof b) {
  console.log('same type ');
} else {
  console.log('different type ');
}
if (typeof y === typeof a) {
  console.log('same type ');
} else {
  console.log('different type ');
}
