'use strict';
let str1 = "My favorite car is Honda";
let str2 = "My favorite bicycle is Koga"
let car = {
    make: "Honda",
    model: "City",
    color: "Silver"
};
let bicycle = {
    make: "Koga",
    model: "Tesla",
    color: "black"
};

if (typeof str1 === typeof str2) {
    console.log("Same type!");
}
if (typeof str1 === typeof car) {
    console.log("Same type!");
}
if (typeof str1 === typeof bicycle) {
    console.log("Same type!");
}
if (typeof str2 === typeof car) {
    console.log("Same type!");
}
if (typeof str2 === typeof bicycle) {
    console.log("Same type!");
}
if (typeof car === typeof bicycle) {
    console.log("Same type!");
}
console.log(typeof str2);
console.log(typeof car);
if (typeof str2 != typeof car) {
    console.log("Not the same type");
}