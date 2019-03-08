//1
console.log('Hello, World!');
console.log('Ciao, mondo!');
console.log('Salut, monde!');




//2
//problem:
//console.log('I'm awesome');

//Solution:
console.log("I'm awesome");




// 3
let x;
console.log("the value of my variable x will be: undefined");
console.log(x);
x = 69;
console.log("the value of x will be: 69");
console.log(x);




//4
let y = "JUST DO IT!";
console.log("the value of my string will be: " + y);
console.log(y);
y = "maybe later...";
console.log("the value of my string will be: " + y);
console.log(y);




//5
//method 1
let z = 7.25;
console.log(z);
const a = Math.round(z);
console.log(a);
const maxvalue = Math.max(a, z);
console.log("the highest value of the two is: " + maxvalue);




//method 2
let z = 7.25;
console.log(z);
const a = Math.round(z);
console.log(a);
let highest_value;
if (z > a) { 
	highest_value = z
    console.log("the highest value of the two is: " + highest_value);
} else {
    highest_value = a;
    console.log("the highest value of the two is: " + highest_value);
}





//mothod 3
let z = 7.25;
console.log(z);
const a = Math.round(z);
console.log(a);
const s = z - a;
let highest_value;
if (s > a - z) {
	highest_value = a + s;
    console.log("the highest value of the two is: " + highest_value);
} else {
	highest_value = z + -s;
    console.log("the highest value of the two is: " + highest_value);
}




//method 4
let z = 7.25;
console.log(z);
let a = z;
if (a - Math.trunc(a) <= 0.4) {
	a = Math.trunc(a);
} else {
	a = 1 - (a - Math.trunc(a)) + a;
}
console.log(a);
let highest_value;
if (z > a) { 
	highest_value = z;
    console.log("the highest value of the two is: " + highest_value);
} else {
    highest_value = a;
    console.log("the highest value of the two is: " + highest_value);
}




//method 5
let z = 7.25;
console.log(z);
let a = z;
n = (a + "").split(".");
i =(n.splice(-1, 1));
let decimal = i[0];
if (decimal.charAt(0) <= 4) {
	a = Math.trunc(a);
} else {
	a = 1 - (a - Math.trunc(a)) + a;
}
console.log(a);
let highest_value;
if (z > a) { 
	highest_value = z;
    console.log("the highest value of the two is: " + highest_value);
} else {
    highest_value = a;
    console.log("the highest value of the two is: " + highest_value);
}




//6
const class_names = [];
console.log("the value of the array is null which is nothing because it's empty");
console.log(class_names);
const domesticated_animals = ['dog', 'cat', 'horse', 'yak', 'alpaca'];
console.log(domesticated_animals);
domesticated_animals.push('baby pig');
console.log(domesticated_animals);




//7
//more strings
let myString = "this is a test";
console.log(myString);
console.log('the length of my string is: '+ myString.length);




//8
const string = 'hello, world!';
const number = 5;
const boolean = true;
const object = {firstName:"Elon", lastName:"Musk"};
console.log(string);
console.log(number);
console.log(boolean);
console.log(object);
console.log('the type of hello world is string');
console.log(typeof string);
console.log('the type of 5 is number');
console.log(typeof number);
console.log('the type of true is boolean');
console.log(typeof boolean);
console.log('the type of firstName:"Elon", lastName:"Musk" is object');
console.log(typeof object);

if (typeof boolean == typeof object) {
    console.log('SAME TYPE');
} else {
	console.log('NOT THE SAME TYPE');
}




//9
let x = 7;
console.log("the value of x will be 1 because it's the remainder");
console.log(x = x % 3);
console.log('% is the modulus operator, it will let you have the remainder of the division');
console.log('The % symbol is used in most programming languages, including JavaScript, as Modulu');
console.log('modulo is the operation use to find the remainder after division of one number by another');




//10
console.log('Can you store multiple types in an array? Numbers and strings?');
console.log('ANSWER: an array can store mutiple types of variables, Example:');
console.log (array = ['Hello!!!!', 454, true]);
console.log("Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?");
console.log('ANSWER: 6/0 === 10/0 is true because both sides have the same value (both infinite) and type,');
console.log('we can test it by running 6/0 === 10/0 straight in the console or like this:');
console.log(6/0 === 10/0);