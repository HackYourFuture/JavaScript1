"use strict";
const arr1 = ["My", "name", "is", "Sila"];
const arr2 = ["Hi", "!", "my", "name", "is", "also", "Sila"];

console.log("The first array's length is " + arr1.length);
console.log("The second array's length is " + arr2.length);

if(arr1.length === arr2.length){
    console.log("They are the same!");
}else {
    console.log("Two different sizes");
}