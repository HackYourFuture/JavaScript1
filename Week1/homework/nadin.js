'use strict';
const greetingIndonesian = 'Ciao';
const greetingArabic = 'مرحبا ';
const greetingSpanish = 'Halo';
 console.log(greetingIndonesian, greetingArabic, greetingSpanish);


console.log("I'm awesome");


let x;
console.log("The value of my variable number will be: undefined");
console.log(x);
x = 1;
console.log("The value of my variable number will be: 1");
console.log(x);

let y = "the first string";
console.log("the value of my variable y will be: the first string");
console.log(y);
y = "the second string";
console.log("the value of my variable string1 will be: the second string");
console.log(y);

//Math around

const z = 7.25;
console.log(z);

const a = Math.round(z);

console.log(a);


if (a <= z) {
    console.log(Math.min(a, z));
} else if (a > z) {
    console.log(Math.max(a, z));
} else {
    console.log("Negative");
}

const b = Math.max(a, z);
console.log(b);

// array

const colors = [];
console.log("the value of my variable y will be: an empty array");
console.log(colors);

const animals = ['dog', 'cat', 'horse', 'fish', 'bird'];
console.log(animals);
animals.push('baby pig');
console.log(animals);


let myString = "this is a test";
myString = "this is a second test";
console.log(myString);
console.log(myString.length);

// typeof

const d = 'cat';
console.log(d);
const e = 5;
console.log(e);
const f = true;
console.log(f);
const g = null;
console.log(g);

console.log("I think the type of my variable d is: string");
console.log("I think the type of my variable e is: number");
console.log("I think the type of my variable f is: boolean");
console.log("I think the type of my variable g is: object");
console.log('d:', typeof d, 'e:', typeof e, 'f:', typeof f, 'g:', typeof g);

if (typeof e === typeof d || typeof e === typeof f || typeof e === typeof g) {
   console.log('SAME TYPE');
} else if (typeof f === typeof d || typeof f === typeof g || typeof g === typeof d) {
    console.log("Same Type");
} else {
    console.log('NOT SAME TYPE');
}

// remainder

let m = 7;
m %= 3;
console.log("the remainder of the division of 7 on 3 is:", m % 3);

let s = 10;
console.log("the remainder of the division of 10 on 4 is:", s % 4);

let p = 600;
console.log("the remainder of the division of 600 on 7 is:", p % 7);

// infinity

const q = [15,'one'];

//infinity is a numeric value representing infinity in javascript
console.log(10/0 === 6/0); //true

console.log(-50/-0 === -10/-0); //true



