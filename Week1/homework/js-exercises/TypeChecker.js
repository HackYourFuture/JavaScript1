"use strict";

//Declare two string and two objects variables
let myString1 = "";
let myString2 = "";
let myObject1 = {};
let myObject2 = {};

//log the type of each variable
console.log(typeof myString1);
console.log(typeof myObject2);

//Compare the data type using if condition
if (typeof myString1 === typeof myString2) {
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}

if (typeof myString1 === typeof myObject1) {
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}

if (typeof myString1 === typeof myObject2) {
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}

if (typeof myString2 === typeof myObject1) {
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}

if (typeof myString2 === typeof myObject2) {
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}

if (typeof myObject1 === typeof myObject2) {
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}