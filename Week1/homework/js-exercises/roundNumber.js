'use strict';
//declare a value
const maxHeightValue = 7.25;

//print the value of z
console.log('value of max height value is ' + maxHeightValue);

//declare a value
const roundNumber= 7;

//printing the value
console.log(`value of round number is  ${Math.round(maxHeightValue)}`); // can be used Math.floor method

// store the height value in new variable
const storeHeightValue = Math.max(roundNumber, maxHeightValue);

console.log(
  `the height value has been store in new variable ${storeHeightValue}`,
);
