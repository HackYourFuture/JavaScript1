'use strict';
//declare a value
const z = 7.25;

//print the value of z
console.log('value of Z is ' + z);

//declare a value
const a = 7;

//printing the value
console.log(`value of A is  ${Math.round(z)}`); // can be used Math.floor method

// store the height value in new variable
const storeHeightValue = Math.max(a, z);

console.log(
  `the height value has been store in new variable ${storeHeightValue}`,
);
