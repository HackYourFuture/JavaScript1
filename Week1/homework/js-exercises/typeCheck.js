'use strict'
const x = "Dog";
const y = "Cat";
const a = {
    name: "Rusty",
    type: "Bulldog",
    age: 6
}
const b = {
    name: "Kap",
    type: "British Shorthair",
    age: 3
}
console.log(typeof x);
console.log(typeof y);
console.log(typeof a);
console.log(typeof b);

if(typeof x == typeof y) {
    console.log("SAME TYPE");
} else {
    console.log("NOT SAME TYPE")
}

if(typeof x == typeof a) {
    console.log("SAME TYPE");
} else {
    console.log("NOT SAME TYPE")
}

if(typeof x == typeof b) {
    console.log("SAME TYPE");
} else {
    console.log("NOT SAME TYPE")
}

if(typeof y == typeof a) {
    console.log("SAME TYPE");
} else {
    console.log("NOT SAME TYPE")
}

if(typeof y == typeof x) {
    console.log("SAME TYPE");
} else {
    console.log("NOT SAME TYPE")
}

if(typeof y == typeof b) {
    console.log("SAME TYPE");
} else {
    console.log("NOT SAME TYPE")
}