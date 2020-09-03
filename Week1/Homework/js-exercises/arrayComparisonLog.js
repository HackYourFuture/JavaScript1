"use strict";

//declaring variables that hold array
var fruits = ["Apples", "Bananas", "Nectarines", "Pears"];
var vegetables = [
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
