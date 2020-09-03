"use strict";

//If x equals 7, and the only other statement is x = x % 3, what would be the value of x after the calculation ?

let x = 7;
x = 7 % 3; // Value of x going to be 1. If we divide 7 by 3, we are left with 2.33333. This leaves us with a remainder of 0.33333, which once mutiplied again by 3 gives us 1. We can test this answer via console:
console.log(x); // prints out 1

//If y equals 21, and the only other statement is y = y % 4, what would be the valu//e of yafter the calculation ?

let y = 21;
y = 21 % 4; // Value of y going to be 1. Once we divide 21 by 4 we are left 5.25. 0.25 is 1/4 of remainder, the whole remainder would be 1. We can check it via console.log:
console.log(y); // prints out 1

//If z equals 13, and th//e only other statement is z = z % 2, what would be the valuof z after the calculation ?

var z = 13;
z = 13 % 2; // Remainder again would be 1. As we divide 13 by 2, we are lef with 6.5. 0.5 is 1/2 of our remainder, so full remainder would be 1. We can check it via console.log:
console.log(z); // prints out 1