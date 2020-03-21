// Declare 4 variables: 2 must be strings and 2 must be objects
let a = {dessert: 'vla', price: '3$'};
let b = {chocolate: 'bar', honey: 'jar'};
let c = 'Amsterdam';
let d = 'New York';

// Write 2 console.log statements to log the 
//type of 2 variables, each with a different data type

console.log(typeof b);
console.log(typeof c);


//eate 6 conditional statements, 
//where for each you check if the data type of 
//one variable is the same as the other
if (typeof b === typeof a) {
	console.log('SAME TYPE');
}

else {
	console.log('Not the Same');
}

if (typeof c === typeof a) {
	console.log('SAME TYPE');
}

else {
	console.log('Not the Same');
}

if (typeof d === typeof a) {
	console.log('SAME TYPE');
}

else {
	console.log('Not the Same');
}

if (typeof b === typeof c) {
	console.log('SAME TYPE');
}

else {
	console.log('Not the Same');
}

if (typeof b === typeof d) {
	console.log('SAME TYPE');
}

else {
	console.log('Not the Same');
}

if (typeof c === typeof d) {
	console.log('SAME TYPE');
}

else {
	console.log('Not the Same');
}

//EXERCISE 9

//If x equals 7, and the only other 
//statement is x = x % 3, what would
//be the value of x after the calculation?
/*;*/


console.log("The remainder operator % gives the remainder of the division of two numbers");
if(x = 7){
    x = x % 3;
    console.log(x);
}

if(y = 21){
    y = y % 4;
    console.log(x);
}

if(z = 13){
    z = z % 3;
    console.log(z);
}
//burada neden === kullanilmiyor?
/*if(x = 7){
    x === x % 3;
    console.log(x);
}

if(y = 21){
    y === y % 4;
    console.log(x);
}

if(z = 13){
    z === z % 3;
    console.log(z);
}*/

//EXERCISE 10 Compare arrays

/*
Declare 2 variables, that each hold an array. 
The first array should have 4 items, the second 7 items
Write a console.log statement that shows the length of each array
*/
const WILD_ANIMALS = ["tiger", "elephant", "wolf", "zebra"];
console.log('The length of the array is '  + WILD_ANIMALS.length + '.');
const DOMESTIC_ANIMALS = ["dog", "cat", "hen", "horse", "sheep", "cow", "goat"];
console.log('The length of the array is '  + DOMESTIC_ANIMALS.length + '.');


/*
Write a conditional statement that checks if both are of equal length. 
If they are, log to the console They are the same!, if not log Two different sizes
*/

if(WILD_ANIMALS.length === DOMESTIC_ANIMALS.length){
	console.log('They are the same!');
}

 else {
 		console.log('Two different sizes!');
 }