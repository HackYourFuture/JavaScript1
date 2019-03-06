//1
console.log('Hallo', 'wereld!'); // Dutch;
console.log('hola', 'mundo!'); //spanish
console.log('مرحبا', 'العالم!'); //Arabic
//2
console.log("I'm awesome"); // should use two quotations instead of one
//3
var x;
console.log('the value of my variable x will be: undefined');
x = 7; // initialize the value of x
console.log('the value of my variable x will be 7');
console.log(x);
//4
var y;
y = 'hyf';
console.log('the value of y will be :hyf');
console.log(y);
var y = 'code';
console.log('the value of y will be :code');
console.log(y);
//5
var z = 7.25;
console.log(z);
var a = Math.floor(z);
console.log(a);
var max = Math.max(z, a);
console.log(max);
//6
var myLibraries = [];
console.log('the value of the the array is []');
var myFavoriteAnimals = ['dogs', 'elephants', 'turtles', 'cats'];
console.log(myFavoriteAnimals);
var newLength = myFavoriteAnimals.push('baby pig');
console.log(newLength);
//7
let myString = 'this is a test';
console.log(myString);
myString.length;
console.log(myString.length);
//8
const a = 4;
console.log('the value of my const a is :4');
const b = 'dog';
console.log('the value of my variable animal is :dog');
const c = true;
console.log('the value of my variable age28 is : true');
const d = [1, 2, 3, 4];
console.log('the value of variable a is: number');
console.log('the value of variable b is : string ');
console.log('the value of c variable is : boolean');
console.log('the value of variable d is :array ');
const typeA = 4;
typeof typeA; //number
const typeB = 'dog';
typeof typeB; //string
const typeC = true;
typeof typeC; // boolean
const typeD = [1, 2, 3, 4];
typeof typeD; // number
console.log(typeA);
console.log(typeB);
console.log(typeC);
console.log(typeD);
if (typeA == typeB) typeA == typeC || typeA == typeD;
{
  console.log('same type');
}
if (typeA != typeB) typeA != typeC || typeA != typeD;
{
  console.log('Not the same type');
}
//9
var x = 7;
x = x % 3;
console.log('the value of x is :1 ');
var y = 8;
y = y % 6;
console.log(2);
var z = 4;
z = z % 3;
console.log(1);
var b = 11;
b = b % 2;
console.log(1);
//10
var arr = [1, 'dog', 32, 'baby']; // you can add different types of values in one array.
// you can compare   infinities
var x = "Not in Eyad's world";
var b = 6 / 0;
var c = 10 / 0;
if (b === c) {
  console.log(true); // it shows true then you can compare infinities
}
var x = 4;
var y = 0;

console.log(x / y); // it shows infinity
