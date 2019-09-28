 

  let score=prompt("Enter your score"); // Manual input
  let full_Score=100;

 // This function turns scores into percentage values.
 function percentage_calculator (studentScore, maxScore){
    let studentscore = Math.round(( score / full_Score) * 100);
    return studentscore;
}


// This function shows the letter grade and score as percentage value.

function grade_calculator (studentscore , studentGrade){
 
    if(studentscore >= 90) {
        studentGrade = "A";
        console.log(" You got an " + studentGrade + " ("+ studentscore + "%)");
    }
    else if(studentscore <= 89 && studentscore >= 80) {
        studentGrade = "B";
        console.log(" You got a " + studentGrade +" ("+ studentscore + "%)");
    }
    else if(studentscore <=79 && studentscore >= 70) {
        studentGrade = "C";
        console.log(" You got a " + studentGrade +" ("+ studentscore + "%)");
    }
    else if(studentscore <= 69 && studentscore >= 60) {
        studentGrade ="D";
        console.log(" You got a " + studentGrade + " ("+ studentscore + "%)");
    }
    else if(studentscore <=59 && studentscore >= 50) { 
        studentGrade = "E";
        console.log(" You got an " + studentGrade + " ("+ studentscore + "%)");
    }
    else if(studentscore <50 && studentscore >= 0) {
        studentGrade = "F";
        console.log(" You got an " + studentGrade +" ("+ studentscore + "%)");
    }
   else{
  console.log(" Enter a number between 0 and 100");

   }
}
grade_calculator(percentage_calculator(score,full_Score));


