'use strict';

function gradeConverter(result) {
  if (result < 0 || result > 100) {
    console.log(`The value ${result} is not valid`);
  } else if (result < 50) {
    console.log(`You got an F (${result}%)!`);
  } else if (result < 60) {
    console.log(`You got an E (${result}%)!`);
  } else if (result < 70) {
    console.log(`You got an D (${result}%)!`);
  } else if (result < 80) {
    console.log(`You got an C (${result}%)!`);
  } else if (result < 90) {
    console.log(`You got an B (${result}%)!`);
  } else if (result < 100) {
    console.log(`You got an A (${result}%)!`);
  }
}

gradeConverter(125);
