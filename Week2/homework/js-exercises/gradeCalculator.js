
'use strict';

function gradeConvert(score) {
  let grade;
  if (score < 0 || score > 100) {
    return 'Value not suitable';
  } else if (score < 50) {
    grade = 'F';
  } else if (score < 60) {
    grade = 'E';
  } else if (score < 70) {
    grade = 'D';
  } else if (score < 80) {
    grade = 'C';
  } else if (score < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return `You got a ${grade} ${score}%`;
}
let b = Math.floor((Math.random() * 100) + 1);
console.log(gradeConvert(b));

// this is with switch

function convertScoreToGrade(score) {
    let output;
    switch (typeof score === 'number') {
    case (score >= 90 && score <=100):
      output = 'A';
      break;
    case (score >= 80 && score <=89):
      output = 'B';
      break;
    case (score >= 70 && score <=79):
      output = 'C';
      break;
    case (score >= 60 && score <=69):
      output = 'D';
      break;
    case (score >= 0 && score <=59):
      output = 'F';
      break;
    default:
      output = 'INVALID SCORE'
    }
    return `You got a ${output} ${score}%`;
  };
  let c = Math.floor((Math.random() * 100) + 1);
  console.log(convertScoreToGrade(c));