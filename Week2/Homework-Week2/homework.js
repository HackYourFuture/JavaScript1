console.log ("Hello World!"); //English
console.log ("Merhaba Dunya!"); //Turkish
console.log ("Hallo Wereld!"); //Dutch
console.log ("Hola Munda!"); //Spanish


console.log("I'm awesome"); //Solution 1 - Using double quotes
console.log('I\'m awesome'); // Solution 2 - Using escape character
console.log("\n");

var x;
console.log("I think the value of my variable 'x' will be: undefined");
console.log(x);
x = 8;
console.log("I think the value of my variable 'x' will be: 8");
console.log(x);
console.log("\n");

var y = "Hello";
console.log("I think the value of my string variable 'y' will be: Hello");
console.log(y);
y = "Hello World";
console.log("I think the value of my string variable 'y' will be: Hello World");
console.log(y);
console.log("\n");

var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
var b = Math.max(z, a);
console.log(b);
console.log("\n");

var myFavoriteAnimals = [];
console.log("I think the value of my array variable 'myFavoriteAnimals' will be: an empty array []");
console.log(myFavoriteAnimals);
myFavoriteAnimals = ["Cats", "Pandas", "Rabbits", "Ducks"];
console.log(myFavoriteAnimals);
myFavoriteAnimals [4] = "Baby Pig";
console.log(myFavoriteAnimals);
console.log("\n");

let myString = "this is a test";
console.log(myString);
console.log("The length of myString is: " + myString.length);
console.log("\n");

let k = 12;
let l = "Hi";
let m = true;
let n = ["Hello", "Hi"];
console.log("The value of my variable k is: " + k);
console.log("The value of my variable l is: " + l);
console.log("The value of my variable m is: " + m);
console.log("The value of my variable n is: " + n);
console.log("I think the type of 'k' is 'number'\n" + 
"The type of 'l' is 'string'\nThe type of 'm' is 'boolean'\nThe type of 'n' is 'object'");
if (typeof k == typeof l) {
    console.log('k and l SAME TYPE');
}
if (typeof k == typeof m) {
    console.log('k and m SAME TYPE');
}
if (typeof k == typeof n) {
    console.log('k and n SAME TYPE');
}
if (typeof l == typeof m) {
    console.log('l and m SAME TYPE');
}
if (typeof l == typeof n) {
    console.log('l and n SAME TYPE');
}
if (typeof m == typeof n) {
    console.log('m and n SAME TYPE');
}
console.log("\n");

let i = 7;
console.log("The value of variable i is 7");
i = i%3;
console.log("The value of variable i is now " + i + " after 'i = i%3;' operation");
console.log("% operator returns module of two numbers");
console.log("% operator is a divison remainder");
console.log("\n");

console.log("We can store multiple types in an array");
let memberInfo = ["Mike", "Amsterdam", 33, true];
console.log("I store multiple data type in memberInfo array. The array is: " + memberInfo);
console.log("I think we can compare 6/0 and 10/0");
console.log("Let's make firstInfinity = 6/0 and secondInfinity = 10/0");
let firstInfinity = 6/0;
let secondInfinity = 10/0;
let comparingTwoInfinities;
console.log("let firstInfinity = 6/0 --> " + firstInfinity);
console.log("let secondInfinity = 10/0 --> " + secondInfinity);
if (firstInfinity === secondInfinity) {
    comparingTwoInfinities = "6/0 and 10/0 are both infinity, equal and can be comperable";
} else {
    comparingTwoInfinities = "We can not compare firstInfinity and secondInfinity";
}
console.log("After comparing 6/0  and 10/0 the result is: " + comparingTwoInfinities);
console.log("\n");
console.log("In this homework I learn:\n1-To use escape character." + 
"\n2-To use console.log()\n3-The value of variables\n4-The type of variables\n" + 
"5-Comparing variables with value and type\n6-To use different data types in JS\n" +
"7-To use typeof operator\n8-To use length property\n9-To ose % operator\n" + 
"To compare infinity");
