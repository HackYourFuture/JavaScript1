"use strict";

//Create a function that fulfills the following requirements:

//Takes in 2 arguments
//Check the data type of each
//Compares each data type
//Logs to the console the message SAME TYPE if they are the same type.If they are different types log Not the same....
//Follow the steps:

//Write 2 console.log statements to log the type of 2 variables, each with a different data type
//Now compare the types of your different variables with one another
//Log Not the same...when the types are different

let personX = "Chandler Bing"; //string
let personY = "Regina Phalange"; //string
let redChair = {"type": "chair"}; // object
let blueCarpet = {"type": "carpet"}; // object

//checking data type
console.log(typeof personX);
console.log(typeof personY);
console.log(typeof redChair);
console.log(typeof blueCarpet);

//comparing if data types are the same
console.log(typeof personX == typeof personY); //true
console.log(typeof personX == typeof redChair); //false
console.log(typeof personX == typeof blueCarpet); //false
console.log(typeof personY == typeof redChair); //false
console.log(typeof personY == typeof blueCarpet); //false
console.log(typeof redChair == typeof blueCarpet); //true

//using if statement
if (typeof personX == typeof personY) {
    console.log('SAME TYPE');
}
if (typeof personY == typeof blueCarpet) {
    console.log('SAME TYPE');
} else {
    console.log('NOT THE SAME');
}





