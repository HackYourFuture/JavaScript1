"use strict";

// 1. convert the score into a percentage
// 2. calculate what grade corresponds with that percentage, and
// 3. shows in the command line the result: the grade and the percentage

// When writing the script, make use of the following grade scores:

// Grade A (90% - 100%)
// Grade B (80% - 89%)
// Grade C (70% - 79%)
// Grade D (60% - 69%)
// Grade E (50% - 59%)
// Grade F (0% - 49%)

// These are the requirements your project needs to fulfill:

// - Make a JavaScript file with a name that describes its contents
// - Use either a switch or if/else statement
// - Write at least 2 comments that explain to others what a line of code is meant to do
function gradeconvertor(score) {
  let grade = "";
  if (score < 0 || score > 100) {
    return "Invalid Value..";
  } else if (score < 50) {
    grade = "F";
  } else if (score < 60) {
    grade = "E";
  } else if (score < 70) {
    grade = "D";
  } else if (score < 80) {
    grade = "C";
  } else if (score < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  // - Make the return value of the function a template string, so you can insert variables!
  // - Use `node` from the command line to test if your code works as expected
  // This is what the script is expected to return in the command line:
  // You got a B (85%)!
  return `You got a ${grade} (${score}%)!`;
}
console.log(gradeconvertor(75));
