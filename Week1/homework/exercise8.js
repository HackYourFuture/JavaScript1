"use strict";

let a = "lion";
let b = "tiger";
let person1 = {
    "name" : "Ali" , "age" : 20
}
let person2 = {
    "name" : "Ayse", "age" : 21
}

console.log(typeof a);
console.log(typeof person1);

if(typeof a == typeof b) {
    console.log("SAME TYPE");
}
else {console.log("Not the same...");}

if(typeof a == typeof person1) {
    console.log("SAME TYPE");
}
else {console.log("Not the same...");}

if(typeof a == typeof person2) {
    console.log("SAME TYPE");
}
else {console.log("Not the same...");}

if(typeof b == typeof a) {
    console.log("SAME TYPE");
}
else {console.log("Not the same...");}

if(typeof b == typeof person1) {
    console.log("SAME TYPE");
}
else {console.log("Not the same...");}

if(typeof b == typeof person2) {
    console.log("SAME TYPE");
}
else {console.log("Not the same...");}