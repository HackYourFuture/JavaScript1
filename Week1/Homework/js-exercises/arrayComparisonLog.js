/*Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
Find out how to get the length of each array. Write a console.log statement that shows the length of each array
Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes*/

"use strict";

//declaring variables that hold array
let fruits = ["Apples", "Bananas", "Nectarines", "Pears"];
let vegetables = [
  "Beets",
  "Tomatoes",
  "Radishes",
  "Spinach leaves",
  "Potatoes",
  "Iceberg lettuce",
  "Artichokes",
];

//checking the lenght of arrays
console.log(fruits.length); // prints out 4
console.log(vegetables.length); // prints out 7

//comparison statement
if (fruits.length == vegetables.length) {
  console.log("THEY ARE THE SAME!");
} else {
  console.log("TWO DIFFERENT SIZES!");
} //prints out TWO DIFFERENT SIZES as the lenght is not the same
