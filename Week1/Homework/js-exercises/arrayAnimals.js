/*Declare variable and assign to it an empty array. Make sure that the name of the variable indicates it contains more than 1 item. For example items instead of item.
Write a console.log statement that explains in words what you think the value of the array is.
Write a console.log statement that logs the array.
Create a new variable with an array that has 3 of your favorite animals, each in a different string. Make sure the name of the variables says something about what the variable contains.
Write a console.log statement that logs the second array.
Add a statement that adds another string ("Piglet)" to the array of animals.
Write a console.log statement that logs the second array!*/

"use strict";

let myArrays = [];
console.log(
  "The value of the array is empty, null. There is nothing in that array"
);
console.log(myArrays);
let myAnimals = ["Cats", "Dogs", "Parakeets"];
console.log(myAnimals);
myAnimals.push("Piglet");
console.log(myAnimals);
