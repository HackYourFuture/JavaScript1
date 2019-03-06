'use strict';
let greetingIndonesian = 'Ciao';
let greetingArabic = 'مرحبا ';
let greetingSpanish = 'Halo';
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

console.log(Math.round(7.25));
// expected output: 8

let z = 7.25;
console.log(z);

let a = 8;
console.log(a);

console.log(z !== a);
console.log(z == a);
console.log(z <= a);

let b = 8;
console.log(b);

let colors = [];
console.log("the value of my variable y will be: an empty array");
console.log(colors);

let animals = ['dog', 'cat', 'horse', 'fish', 'bird'];
console.log(animals);
animals.push('baby pig');
console.log(animals);

let myString = "this is a test";
myString = "this is a second test";
console.log(myString);
console.log(myString.length);

let d = 'cat';
console.log(d);
let e = 5;
console.log(e);
let f = true;
console.log(f);
let g = null;
console.log(g);

console.log("I think the type of my variable d is: string");
console.log("I think the type of my variable e is: number");
console.log("I think the type of my variable f is: boolean");
console.log("I think the type of my variable g is: null");
console.log('d:string, e:number, f:boolean, g:null');

console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);


console.log(e == d, f !== g);
// console.log(f == g);
// console.log(d !== f);
// console.log(e == f);


// if (e = d ) {
//    return "positive";
// } else {
//     return "not positive";
// }


if (e = d ) {
   console.log('SAME TYPE');
}

let m = 7;
m = m % 3;
console.log(m);

let s = 10;
console.log(s % 4);

let p = 600;
console.log(p % 7);

let q = [15,'one'];

//infinity is a numeric value representing infinity in javascript
console.log(10/0 === 6/0); //true

console.log(-50/-0 === -10/-0); //true



