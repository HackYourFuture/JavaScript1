//1. Write a console.log statement saying "Hello World!"
let greeting = "Hello, world!";     // English
console.log(greeting);

greeting = "Hallo, wereld!";     // Dutch
console.log(greeting);

greeting = "Marhaba, Aalam!";     // Arabic
console.log(greeting);

greeting = "Halo, dunia!";      // Indonesian
console.log(greeting);

greeting = "Ciao, mondo!";      // Italian
console.log(greeting);

greeting = "Hola, mundo!";       // Spanish
console.log(greeting);

console.log("---------------");

//2. Consider the following code:
console.log('I\'m awesome');

console.log("---------------");

//3. Declare a variable x and initialize it with an integer
let x;    
console.log("the value of my variable x will be: undifined");
console.log(x);

x = 21;     //const x = 21;     //The output is error, I cann't use initialization, I have to use difination.
console.log("the value of my variable x will be: 21");
console.log(x);

console.log("---------------");

//4. Declare a variable y and assign a string to it.
let y = "I'm trying to improve my typing skills";   
console.log("The value of my variable y will be: I'm trying to improve my typing skills");
console.log(y);

y = "It is more difficult than it seems to be";
console.log("The value of my variable y will be: It is more difficult than it seems to be");
console.log(y);
console.log("---------------");

//5. How do you round the number 7.25, to the nearest integer 
const z = 7.25;
console.log(z);

const a = 7;
console.log(a);

const highestValue = Math.max(7, 7.25);

console.log(highestValue);

console.log("---------------");

//6. Arrays
const myEmptyValues = [];
console.log("The value of my array will be: []");   //because it has no given value, it will be empty.... not undefined because it is not a value 
console.log(myEmptyValues);

const myFavouriteAnimals = ["Cats", "Birds", "Rabbits"];
console.log(myFavouriteAnimals);

myFavouriteAnimals.push("baby pig");
console.log(myFavouriteAnimals);

console.log("---------------");

//7. More strings
let myString = "this is a test";
console.log(myString);

myStringLength = myString.length;
console.log(myStringLength);

console.log("---------------");

//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
let firstFoo = "Ghufran";
console.log("the value of my variable will be: Ghufran // " + firstFoo);

secondFoo = 21;
console.log("the value of my variable will be: 21 // " + secondFoo);

thirdFoo = "February";
console.log("the value of my variable will be: February // " + thirdFoo);

fourthFoo = 1985;
console.log("the value of my variable will be: 1985 // " + fourthFoo);

console.log("---------------");

//typeof
console.log("The type of my variable will be: string");
console.log(typeof firstFoo);

console.log("The type of my variable will be: number");
console.log(typeof secondFoo);

console.log("The type of my variable will be: string");
console.log(typeof thirdFoo);

console.log("The type of my variable will be: number");
console.log(typeof fourthFoo);

console.log("---------------");

//compare the types of your different variables with one another
//firstFoo
if (typeof firstFoo === typeof secondFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}
if (typeof firstFoo === typeof thirdFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}
if (typeof firstFoo === typeof fourthFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

console.log("---------------");

//secondFoo
if (typeof secondFoo === typeof firstFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

if (typeof secondFoo === typeof thirdFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

if (typeof secondFoo === typeof fourthFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

console.log("---------------");

//thirdFoo
if (typeof thirdFoo === typeof firstFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

if (typeof thirdFoo === typeof secondFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

if (typeof thirdFoo === typeof fourthFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

console.log("---------------");

//fourthFoo
if (typeof fourthFoo === typeof firstFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

if (typeof fourthFoo === typeof secondFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

if (typeof fourthFoo === typeof thirdFoo) {
    console.log("SAME TYPE");
} 
else { 
    console.log("DIFFERENT TYPE");
}

console.log("---------------");

//9.    x = x % 3
x = 7;     //x is declared before
x = x % 3; 
console.log(x);
console.log("the output will be: 1");
console.log("3 goes into 7 twice");
console.log("it will leave the rest 1 over");

console.log("---------------");


//10. Write a program to answer the following questions:
//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
//Yes, I can
const multipleTypesArray = ["Ghufran", 21, "February", 1985];
console.log(multipleTypesArray);

console.log("---------------");

//10.2 Can you compare infinities? (Not in Eyad's world) - 
//yes, we can compare infinities

//does 6/0 === 10/0? How can you test this?
//Yes, it does. We can log it to see if it is true
console.log(6/0 === 10/0);

//10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
console.log("Infinities are treated as numbers");
console.log("We can use console.log to check if the values are equal or not, and if one is greater or less than the other");
console.log("It will compare the values");
console.log("The output will be a boolean: true or false");

console.log("---------------");