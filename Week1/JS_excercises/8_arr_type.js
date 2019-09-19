'use strict';

// Declare 4 variables: 2 must be strings and 2 must be objects
let str1 = 'one';
let str2 = 'two';
let obj1 = {
  key1: 'three',
  key2: 4,
};
let obj2 = {
  key1: 'five',
  key2: 6,
};

// Create 8 conditional statements, where for each you check if the data type of one variable is the same as the other
// 1
if (typeof str1 === typeof str2) {
  console.log('same type');
} else {
  console.log('not the same');
}

// 2
if (typeof str1 === typeof obj1) {
  console.log('same type');
} else {
  console.log('not the same');
}

// 3
if (typeof str1 === typeof obj2) {
  console.log('same type');
} else {
  console.log('not the same');
}

// 4
if (typeof str2 === typeof obj1) {
  console.log('same type');
} else {
  console.log('not the same');
}

// 5
if (typeof str2 === typeof oj2) {
  console.log('same type');
} else {
  console.log('not the same');
}

// 6
if (typeof obj1 === typeof obj2) {
  console.log('same type');
} else {
  console.log('not the same');
}

// 7
if (typeof obj1.key1 === typeof obj1.key2) {
  console.log('same type');
} else {
  console.log('not the same');
}

// 8
if (typeof obj1.key1 === typeof obj2.key1) {
  console.log('same type');
} else {
  console.log('not the same');
}

// Write 2 console.log statements to log the type of 2 variables, each with a different data type
console.log(typeof str1);
console.log(typeof obj2);

// Now compare the types of your different variables with one another
// Log Not the same... when the types are different
if (typeof str1 !== typeof obj2) {
  console.log('not the same.');
};
