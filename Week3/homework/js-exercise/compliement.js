"use strict";

function giveCompliement(name) {
  var comp = [
    "great",
    "awesome",
    "perfect",
    "super",
    "fantastic",
    "handsome",
    "excellent",
    "funny"
  ];
  var random = comp[Math.floor(Math.random() * comp.length)];
  return "You are " + random + " " + name;
}

console.log(giveCompliement("Noer"));
console.log(giveCompliement("Noer"));
console.log(giveCompliement("Noer"));

/*There is no better way to start your day then with a compliment!

Write a function named giveCompliment
It takes 1 argument: your name
Inside the function create an array with 10 strings. Each string should be a compliment, like "great", "awesome"
Write logic that randomly selects a compliment
Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
Call the function three times, giving each function call the same argument: your name.
*/
