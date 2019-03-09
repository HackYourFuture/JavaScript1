// Part 1 Hello World
console.log('Hello World'); // English
console.log('Merhaba Dunya'); // Turkish
console.log('Hallo Wereld'); // Dutch
console.log('مرحبا بالعالم'); // Arabic

// Part 2 Error  -----------------------------------------
console.log("I'm awesome");

// Part 3 Console.log(x)   --------------------------------
let x;
console.log('the value of my variable x will be: 16');
console.log(x);
x = 16;
console.log('the value of my variable x will be: 16');
console.log(x);

// Part 4  String y  ---------------------------------------
let y = 'I love you JavaScript';
console.log('the value of my variable y will be: I love you JavaScript');
console.log(y);
y = 'I will learn you';
console.log('the value of my variable y will be: I will learn you');
console.log(y);

// Part 5  Round a number  ---------------------------------
const z = 7.25;
console.log(z);
const a = Math.round(z);
console.log(a);
const b = Math.max(z, a);
console.log(b);

// Part 6 Arrays   ------------------------------------------
let myNumbers = [];
console.log('the value of my variable y will be: myLuckyNumbers');
console.log(myNumbers);
let myFavouriteAnimals = ['cat', 'butterfly', 'bear'];
console.log(myFavouriteAnimals);
myFavouriteAnimals.push('baby pig');
console.log(myFavouriteAnimals);

// Part 7  More Strings - Length -----------------------------
let myString =
  'JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions.';
console.log(myString);
console.log(myString.length);

// Part 8  typeof  -------------------------------------------
let k = 42;
let l = 'Hello World';
let m;
let n = true;
console.log(k, l, m, n);
console.log('the types of my variable accordingly are: number, string, undefined, boolean');
console.log(typeof k, typeof l, typeof m, typeof n);
if (typeof k !== typeof l) {
  console.log('Not Same Type');
}
if (typeof k !== typeof m) {
  console.log('Not Same Type');
}
if (typeof k !== typeof n) {
  console.log('Not Same Type');
}
if (typeof l !== typeof m) {
  console.log('Not Same Type');
}
if (typeof l !== typeof n) {
  console.log('Not Same Type');
}
if (typeof m !== typeof n) {
  console.log('Not Same Type');
}

// Part 9   Remainder %  -----------------------------------------
x = 7;
x %= 3;
console.log(x);

y = 100;
console.log((y %= 15));

if (y % 2 === 0) {
  console.log(y + ' is a even number');
}
y = 13;
if (y % 2 === 1) {
  console.log(y + ' is a odd number');
}

// Part 10 --------------------------------------------------------------
let arr = [13, 'I am a programmer', undefined, null];
console.log(arr);

function arrayTypeChecker(b) {
  for (let i = 0; i < b.length - 1; i++) {
    if (typeof b[i] !== typeof b[i + 1]) {
      return 'Array includes DIFFERENT data types';
    } else {
      return 'Array includes SAME data types';
    }
  }
}

console.log(arrayTypeChecker(arr));

console.log(6 / 0 === 10 / 0);
