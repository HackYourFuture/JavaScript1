"use strict";

//Declare 2 variables, that each hold an array. 
const firstArray = ["10", 11, "LiveTo", true];
const secondArray = [null, 22.3, {age: 33}, [0], false, 44, "Hello"];

// Write a conditional statement that checks if both are of equal length.
if(firstArray.length == secondArray.length){
    console.log("They are the same!");
}else{
    console.log("Two different sizes");
}
