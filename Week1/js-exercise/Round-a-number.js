'use strict';
let z = 7.25;
console.log(z)

let a = Math.round(z);

console.log(a, z);

let hightest = null;

if (z > a) {
    hightest = z;
    console.log(`The hightest number is ${hightest}`);
} else {

    hightest = a;
    console.log(false);
}