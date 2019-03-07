// 1. Arabic - English - Dutch - Italian -Spanish - French.
console.log(
  `مرحبا أيها العالم
  Hello, World!
  Hallo, wereld!
  Ciao, mondo!
  Hola, mundo!
  Bonjour, monde`,
);

// 2. The error was because of using the same quotes as the apostrophe in 'I'm'.
console.log(`I'm awesome`);

// 3.1
let x;
// 3.2
console.log(`The value of my variable x will be: undefined`);
// 3.3
console.log(x);
// 3.4 If I initialize the variable x here, I will get a syntax error,
// because It's already been declared. So I've only defined it.
x = 7;
// 3.5
console.log(`The value of x will be: 7`);
// 3.6
console.log(x);

// 4.
let y = `This is a string`;
// 4.1
console.log(`The value of the string will be the following sentence: This is a string`);
// 4.2
console.log(y);
// 4.3
y = `New string`;
// 4.4
console.log(`The value will be the following: New string`);
// 4.5
console.log(y);

// 5. The nearest integer is 7 because it's less than 7.50
// 5.1
let z = 7.25;
// 5.2
console.log(z);
// 5.3
let a = 7;
// 5.4
console.log(a);
// 5.5
let theHighestValue;
if (a > z) {
  theHighestValue = a;
} else {
  theHighestValue = z;
}
// 5.6
console.log(`The highest value is: ` + theHighestValue);

// 6.1
const citiesInNetherlands = [];
// 6.2
console.log(`The value of the array is: 0`);
// 6.3
console.log(citiesInNetherlands);
// 6.4
const favoriteAnimals = [`cat`, `dog`, `hamster`, `lion`, `tiger`];
// 6.5
console.log(favoriteAnimals);
// 6.6
favoriteAnimals.push(`baby pig`);
// 6.7
console.log(favoriteAnimals);

// 7.1
const myString = `this is a test`;
console.log(myString);
// 7.2
myString.length;
// 7.3
console.log(myString.length);

// 8.1
const myFirstName = `Wadeea`;
const myLastName = `Kiwan`;
let myAge = 33;
const myTelephone = 0612345678;
const genderMale = true;
const childrenFirstNames = [`Kady`, `Aram`];
// 8.2
console.log(myFirstName);
console.log(myLastName);
console.log(myAge);
console.log(myTelephone);
console.log(genderMale);
console.log(childrenFirstNames);
// 8.3
console.log(`The type of the variable 'myFirstName' will be: string`);
console.log(`The type of the variable 'myLastName' will be: string`);
console.log(`The type of the variable 'myAge' will be: number`);
console.log(`The type of the variable 'myTelephone' will be: number`);
console.log(`The type of the variable 'genderMale' will be: boolean`);
console.log(`The type of the variable 'childrenFirstNames' will be: object`);
// 8.4
console.log(typeof myFirstName);
console.log(typeof myLastName);
console.log(typeof myAge);
console.log(typeof myTelephone);
console.log(typeof genderMale);
console.log(typeof childrenFirstNames);
// 8.5
// 8.6
typeof myFirstName === typeof myLastName;
typeof myFirstName === typeof myAge;
typeof myFirstName === typeof myTelephone;
typeof myFirstName === typeof genderMale;
typeof myFirstName === typeof childrenFirstNames;
typeof myLastName === typeof myAge;
typeof myLastName === typeof myTelephone;
typeof myLastName === typeof genderMale;
typeof myLastName === typeof childrenFirstNames;
typeof myAge === typeof myTelephone;
typeof myAge === typeof genderMale;
typeof myAge === typeof childrenFirstNames;
typeof myTelephone === typeof genderMale;
typeof myTelephone === typeof childrenFirstNames;
typeof genderMale === typeof childrenFirstNames;
// 8.6
if (typeof myFirstName === typeof myLastName) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myFirstName !== typeof myAge) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myFirstName === typeof myTelephone) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myFirstName === typeof genderMale) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myFirstName === typeof childrenFirstNames) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myLastName === typeof myAge) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myLastName === typeof myTelephone) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myLastName === typeof genderMale) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myLastName === typeof childrenFirstNames) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myAge === typeof myTelephone) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myAge === typeof genderMale) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myAge === typeof childrenFirstNames) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myTelephone === typeof genderMale) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof myTelephone === typeof childrenFirstNames) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof genderMale === typeof childrenFirstNames) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

// 9
// x = 7 is already declared and defined in question 3
x = x % 3;
console.log(`the new value of x will be: 1`);
console.log(x);
// 9.1
let m = 16;
m %= 4;
console.log(`the new value of m will be: 0`);
console.log(m);
let n = 19;
n %= 5;
console.log(`the new value of n will be: 4`);
console.log(n);
let p = 6;
p %= 7;
console.log(`the new value of p will be: 6`);
console.log(p);

// 10.1
const myProfile = [`Wadeea`, `Kiwan`, 33, 0612345678];
console.log(typeof myProfile[0]);
console.log(typeof myProfile[2]);
// 10.2 - 10.3
6 / 0 === 10 / 0;
console.log(`The comparison result will be: true`);
console.log(6 / 0 === 10 / 0);
console.log(100 / 0 === 15 / 0);
