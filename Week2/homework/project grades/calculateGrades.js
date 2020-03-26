'use strict';

function calculateGrade(grade) {
  let x = '';
  switch (true) {
    case grade >= 90:
      x = 'A';
      break;
    case grade >= 80:
      x = 'B';
      break;
    case grade >= 70:
      x = 'C';
      break;
    case grade >= 60:
      x = 'D';
      break;
    case grade >= 50:
      x = 'F';
      break;
  }
  return 'you got ' + x + ' (' + grade + '%)';
}
console.log(calculateGrade(60));
