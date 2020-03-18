"use strict";

const array1 = ["Hello", 123, true, { name: "Zekiye"}];

console.log('The length of the array1 is ' + array1.length);

const array2 = ["Hello", 123, true, { name: "Zekiye"},{surname : "Cakiral"},29,"Istanbul"];

console.log('The length of the array2 is ' + array2.length);

if(array1.length == array2.length){
    console.log("They are the same!");
}else{
    console.log("Two different sizes");
}