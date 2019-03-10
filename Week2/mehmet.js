// 1. Write a console.log statement saying "Hello World!" for each language that you know.

console.log(`Merhaba Dünya!
Hello World!
Ciao Mondo!
Hallo Wereld!`);

// 2. Consider the following code:

console.log(`I'm awesome`);

// 3. Declare a variable x and initialize it with an integer, using these exact steps:
// 3.1
let x; // Declaration and initialization

// 3.2
console.log(`the value of my variable x will be: undefined`);

// 3.3
console.log(x);

// 3.4
x = 9;

// 3.5
console.log(`the value of my x is 9`);

// 3.6
console.log(x);

// 4
let y = `house number 80`;

// 4.1
console.log(`my string's \(y\) value will be \"house number 80\"`);

// 4.2
console.log(y);

// 4.3
y = `house number 90`;

// 4.4
console.log(`my new string \(y\) value will be \"house number 90\"`);

// 4.5.
console.log(y);

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

// 5.1
const z = `7.25`;

// 5.2
console.log(z);

// 5.3
const a = Math.round(z);

// 5.4
console.log(a);

// 5.5
const highest = Math.max(z, a);

// 5.6
console.log(highest);

// 6. Arrays

// 6.1
const myFavoriteCities = [];

// 6.2
console.log(`the value of the \"myFavoriteCities\" array will be \"[]\"`);

// 6.3
console.log(myFavoriteCities);

// 6.4
const myFavPals = [`Dog`, `Cat`, `Lion`, `Whale`, `Elephant`];

// 6.5
console.log(myFavPals);

// 6.6
myFavPals.push(`Baby pig`);

// 6.7
console.log(myFavPals);

// 7. More strings

// 7.1
let myString = `this is a test`;
console.log(myString);

// 7.2
// myString.length will print the length of my string

// 7.3
console.log(myString.length);

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

// 8.1
const varOne = `Table`;
const varTwo = 2;
const varThree = `Water`;
const varFour = true;

// 8.2
console.log(`The value of my variable varOne is:` + varOne);
console.log(`The value of my variable varTwo is:` + varTwo);
console.log(`The value of my variable varThree is:` + varThree);
console.log(`The value of my variable varFour is:` + varFour);

// 8.3
console.log(`The type of my varOne is string`);
console.log(`The type of my varTwo is number`);
console.log(`The type of my varThree is string`);
console.log(`The type of my varFour is boolean`);

// 8.4
console.log(typeof varOne);
console.log(typeof varTwo);
console.log(typeof varThree);
console.log(typeof varFour);

// 8.5 and 8.6 (just compared two but will look for another ways...)

if (typeof varOne === typeof varTwo) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

if (typeof varOne === typeof varThree) {
  console.log(`SAME TYPE`);
} else {
  console.log(`NOT SAME TYPE`);
}

// 9.
x = 7;
x = x % 3; //this is a remainder assignment, x will be: 1
console.log(x);
//The remainder assignment operator divides a variable
//by the value of the right operand and assigns the remainder to the variable.
console.log(`8 %= 3 -> 2`);
console.log(`11 %= 2 -> 1`);
console.log(`19 %= 9 -> 1`);

// 10.

// 10.1
console.log(`Yes, we can store multiple types in an array`);
const mixArr = [1, `two`, true];
console.log(mixArr);
console.log(typeof mixArr[0], typeof mixArr[1], typeof mixArr[2]);

// 10.2
if (6 / 0 === 10 / 0) {
  console.log(`Comparable`);
} else {
  console.log(`Not Comparable`);
}
