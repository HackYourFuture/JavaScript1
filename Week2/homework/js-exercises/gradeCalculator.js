'use strict';

let math = 90;
let physics = 90;
let biology = 90;

/**  parseFloat is used to accept numbers only and return Nan if its not */
let totalGrades= parseInt(math) + parseInt(physics) + parseInt(biology);

let percentage= (totalGrades/300) * 100;

let grade;
if (percentage <= 100 && percentage >=90){
     grade = 'A';
} else if (percentage <= 89  && percentage >=80) {
     grade = 'B';
} else if (percentage <= 79  && percentage >=70) {
     grade = 'C';
} else if (percentage <= 69  && percentage >=60) {
     grade = 'D';
} else if (percentage <= 59  && percentage >=50) {
     grade = 'E';
} else {
     grade = 'F';
}

console.log(`From the three subjects your total is  ${totalGrades}  and your total percentage is ${percentage} % with a grade of  ${grade}`);
