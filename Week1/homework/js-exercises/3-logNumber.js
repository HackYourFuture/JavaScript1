'use strict';

// if you used CONST for a variables without value , You will get an error message
// const numberX; ( SyntaxError: Missing initializer in const declaration )
// but if you used another keyword like let or var 
// var numberX; let numberX; prints undefined without erroe message

var numberX;

console.log('Guess what is the value of X ? Number or String');
console.log(numberX); 

var numberX = 7;

console.log('If you guess it is a number, you are good at guessing , because the value of X is a number');
console.log(numberX);
