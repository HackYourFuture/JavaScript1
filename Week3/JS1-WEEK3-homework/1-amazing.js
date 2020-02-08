"use strict";

// Exercise 1: You are amazing, Noer!
// There is no better way to start your day then with a compliment!
// Write a function named giveCompliment
// It takes 1 argument: your name
// Inside the function create an array with 10 strings. Each string should be a compliment, 
// like "great", "awesome"
// Write logic that randomly selects a compliment
// Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
// Call the function three times, giving each function call the same argument: your name.

function giveCompliment(yourName) {
  const titles = [
    "honest",
    "handsome",
    "patient",
    "clever",
    "straight",
    "humble",
    "super",
    "successful",
    "faithful",
    "hopeful"
  ];
  const oneOfTitle = titles[Math.floor(Math.random() * titles.length)];
  return `You are ${oneOfTitle}, ${yourName}!`;
}

console.log(giveCompliment("Odai"));
console.log(giveCompliment("Unmesh"));