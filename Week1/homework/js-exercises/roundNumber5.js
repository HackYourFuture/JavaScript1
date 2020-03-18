"use strict";
// Declare a variable z 
let z ;
// and assign the number 7.25 to it.
z = 7.25;

console.log(z);
// Declare another variable a 
let a;
// that has the value of z but rounded to the nearest integer.
a = Math.round(z);

console.log(a);

// Write a console.log statement in which you log the value of the highest value.
if(a > z){
    let h = a;
    console.log("The highest value is " + h );
} else if (z > a) {
    let h = z;
    console.log("The highest value is " + h );
} else {
    console.log("They are equal");
}