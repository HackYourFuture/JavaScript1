// Welcome, Class 20

//3 ways to create a variable in JavaScript

// var, let, const

// 1. DECLARATION
// 2. DEFINITION
// 3. INITIALISATION

var name;
name = 'Yash';

// Old JavaScript
var lastName = 'Kapila';

// New-JavaScript - ES6 ECMAScript 2015

const dob = '18/03/1990';

// 'var' variables have a function scope
// 'let' variables have a block scope
// 'const' variables have a block scope

const pinCode = 1018;
const address = `172 Johan Van Der Keukenstraat ${pinCode}`;
console.log(address);
const age = '28';
age = 29;

console.log(age);

const arr = [1, 2, 3, 4, 5, 6];
arr[10] = 11;
console.log(arr);
