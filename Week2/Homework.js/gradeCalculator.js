'use strict';

function grade(score) {
  let grade;
  if (score >= 0 && score <= 49) {
    grade = 'F';
  } else if (score <= 59) {
    grade = 'E';
  } else if (score <= 69) {
    grade = 'D';
  } else if (score <= 79) {
    grade = 'C';
  } else if (score <= 89) {
    grade = 'B';
  } else if (score <= 100) {
    grade = 'A';
  } else {
    grade = 'Error';
    console.log('Entry must be between 0 and 100'); // This will show false inputs
  }
  return `You got a '${grade}' (${score}%)!`; // This shows the grade and score
}

console.log(grade(98));
