"use strict";

function giveCompliment(yourName = "") {
    let complimentArray = [
        "great",
        "awesome",
        "smart",
        "wonderful",
        "thoughtful",
        "magnificent",
        "kind",
        "creative",
        "patient",
        "brave"
    ];
    let randomArrayIndex = Math.floor(Math.random() * complimentArray.length);
    return "You are " + complimentArray[randomArrayIndex] + ", " + yourName;
}

console.log(giveCompliment("Zekiye"));

console.log(giveCompliment("Zekiye"));

console.log(giveCompliment("Zekiye"));

// another way (arrow function)
const giveComplimentArrow = yourName => {
    let complimentArray = [
        "great",
        "awesome",
        "smart",
        "wonderful",
        "thoughtful",
        "magnificent",
        "kind",
        "creative",
        "patient",
        "brave"
    ];
    let randomArrayIndex = Math.floor(Math.random() * complimentArray.length);
    return "You are " + complimentArray[randomArrayIndex] + ", " + yourName;
};
console.log(giveComplimentArrow("Zekiye"));