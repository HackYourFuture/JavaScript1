'use strict'
// 1. Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
const tools = ['hammer', 'axe', 'screwdriver', 'wrench'];
const animals = ['rabbit', 'hare', 'hamster', 'cow', 'sheep', 'goat', 'donkey'];
// 2. Find out how to get the length of each array. Write a `console.log` statement that shows the length of each array
console.log("The length of tools array is: ", tools.length);
console.log("The length of animals array is: ", animals.length);
// 3. Write a conditional statement that checks if both are of equal length. If they are, log to the console `They are the same!`, if not log `Two different sizes`
console.log(tools.length === animals.length ? "They are the same!" : "Two different sizes");
