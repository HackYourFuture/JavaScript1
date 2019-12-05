"use strict";

let grade = 60;

// this is a function that takes one variable
gradeCalc(grade);

function gradeCalc(grade) {
  switch (true) {
    case grade >= 90 && grade <= 100:
      console.log(`You got an A (${grade}%)`);
      break;
    case grade >= 80 && grade <= 89:
      console.log(`You got a B (${grade}%)`);
      break;
    case grade >= 70 && grade <= 79:
      console.log(`You got a C (${grade}%)`);
      break;
    case grade >= 60 && grade <= 69:
      console.log(`You got a D (${grade}%)`);
      break;
    case grade >= 50 && grade <= 59:
      console.log(`You got an E (${grade}%)`);
      break;
    case grade >= 0 && grade <= 49:
      console.log(`You got an F (${grade}%)`);
      break;
    default:
      console.log("Please enter your grade..");
  }
}
// I made this loop to check all the grades 
/* for (let i = 0; i < 100; i++){
        grade = i
      switch (true){
        case (grade >= 90 && grade <= 100 ):
          console.log(`You got an A (${grade}%)`);
          break;
        case (grade >= 80 && grade <= 89 ):
          console.log(`You got a B (${grade}%)`);
          break;
        case (grade >= 70 && grade <= 79 ):
          console.log(`You got a C (${grade}%)`);
          break;
        case (grade >= 60 && grade <= 69 ):
          console.log(`You got a D (${grade}%)`);
          break;
        case (grade >= 50 && grade <= 59 ):
          console.log(`You got an E (${grade}%)`);
          break;
        case (grade >= 0 && grade <= 49 ):
          console.log(`You got an F (${grade}%)`);
          break;
        default:
          console.log("Please enter your grade..");}
      }*/
