console.log(`
Question 1`);
// 1. Write a console.log statement saying
// "Hello World!" for each language that you know.

console.log(`Hello World
Merhaba Dunya
Priviyet Mir
Marhaban Dunya
Hallo Wereld
`);

console.log(`
Question 2`);
// 2. Consider the following code:

console.log("I'm awesome");

console.log(`
Question 3`);
// 3. Declare a variable x and initialize it with
// an integer, using these exact steps:
// 3.1 First, declare your variable x (do not initialize it yet).
// 3.2 Add a console.log statement that explains in
// words what you think the value of x is, like in this example:

var x;
console.log('the value of my variable x will be : whateverYouThinkItWillLog');
console.log(x);
x = 41;
console.log('the value of x is my age');
console.log(x);

console.log(`
Question 4`);
// 4. Declare a variable y and assign a string to it.
var y = `Leersum`;
console.log(`the value of y is the city where I stay`);
console.log(y);
y = `Netherlands`;
console.log(`the value of y is the country where I stay`);
console.log(y);

console.log(`
Question 5`);
//5. How do you round the number 7.25, to
//the nearest integer (i.e., whole number)?

let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let b = Math.max(a, z);
console.log(b);

console.log(`
Question 6`);
// 6. Arrays

let cities = ['', '', ''];
console.log(`the array is the list of some of capital cities in the world`);
console.log(cities);
let myFavoriteAnimals = ['dog', 'cat', 'horse', 'rapid', 'bird', 'camel'];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push(`baby pig`);
console.log(myFavoriteAnimals);

console.log(`
Question 7`);
//7. More strings

let myString = `this is a test`;
console.log(myString);
console.log(myString.length);

console.log(`
Question 8`);
// 8. Write a program that checks the types of two variables
// and prints out SAME TYPE if they are the same type.

let name = `Ramazan`;
let age = 41;
let workPermit;
let genderMale = `True`;
console.log(name);
console.log(age);
console.log(workPermit);
console.log(genderMale);
let typeOfName = `string`;
let typeOfAge = `number`;
let typeOfWorkPermit = 'undefined';
let typeOfGenderMale = `boolean`;
console.log(`I think type of name is ${typeOfName}`);
console.log(`I think type of age is ${typeOfAge}`);
console.log(`I think type of workPermit is ${typeOfWorkPermit}`);
console.log(`I think type of genderMale is ${typeOfGenderMale}`);
if (typeof name === typeOfName) {
  console.log(`SAME TYPE`);
} else {
  console.log(`DIFFERENT TYPE`);
}
if (typeof age === typeOfAge) {
  console.log(`SAME TYPE`);
} else {
  console.log(`DIFFERENT TYPE`);
}
if (typeof workPermit === typeOfWorkPermit) {
  console.log(`SAME TYPE`);
} else {
  console.log(`DIFFERENT TYPE`);
}
if (typeof typeOfGenderMale === typeOfGenderMale) {
  console.log(`SAME TYPE`);
} else {
  console.log(`DIFFERENT TYPE`);
}

console.log(`
Question 9`);
// 9. If x equals 7, and the only other statement is
// x = x % 3, what would be the new value of x?
var x = 7;
console.log(`when ${x} is divided by 3 the remainder is `);
x = x % 3;
console.log(x);

var w = 27;
console.log(`when ${w} is divided by 4 the remainder is `);
w = w % 4;
console.log(w);

var o = 125;
console.log(`when ${o} is divided by 11 the remainder is `);
o = o % 11;
console.log(o);

var t = 235;
console.log(`when ${t} is divided by 15 the remainder is `);
t = t % 15;
console.log(t);

console.log(`
Question 10`);
console.log(`Yes`);
let myPersonelData = ['Ramazan', 'Ince', 41, 'Leersum', 3956, , null, true];
console.log(myPersonelData);
console.log(
  typeof myPersonelData[0],
  typeof myPersonelData[1],
  typeof myPersonelData[2],
  typeof myPersonelData[3],
  typeof myPersonelData[4],
  typeof myPersonelData[5],
  typeof myPersonelData[6],
  typeof myPersonelData[7],
);
console.log(`does 6/0 === 10/0?`);
console.log(6 / 0 === 10 / 0);
