'use strict';

//Exercise 9: Log the remainder

//Computers use a format that cannot accurately represent a number like '0.1' or '0.3' .The '0.1' is rounded to the nearest number in that format  even before the calculation happens.

//if x equals 7, and the only other statement is x = x % 3, the value of x after the calculation will be 1.
let x = 7;
x %= 3 ;
console.log(x);

//if y equals 21, and the only other statement is y = y % 4, the value of x after the calculation will be 1.
let y = 21;
y %= 4; 
console.log(y);

//if z equals 13, and the only other statement is z = z % 2, the value of x after the calculation will be 1.
let z = 13;
z %= 2;
console.log(z);
