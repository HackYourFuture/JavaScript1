'use strict';

/*
1. If `x` equals 7, and the only other statement is `x = x % 3`, what would be the value of `x` after the calculation?
2. If `y` equals 21, and the only other statement is `y = y % 4`, what would be the value of `y` after the calculation?
3. If `z` equals 13, and the only other statement is `z = z % 2`, what would be the value of `z` after the calculation?
*/

let x = 7;
    x %= 3;// same  x = x % 3 ;
//  x = 7 * 0.03 = 0.21 
    console.log('The value of X is ' + x);

let y = 21;
    y %= 4;// same  y = y % 4 ; 
// y = 21 * 0.04 = 0.84    
    console.log('The value of Y is ' + y); 


let z = 13;
    z %= 2;// same  z = z % 2;
// z = 13 * 0.02 = 0.26
    console.log('The value of Z is ' + z); 

// with Javascript 0.1 to 0.999999 is 1
// that meaning X , Y , Z = 1