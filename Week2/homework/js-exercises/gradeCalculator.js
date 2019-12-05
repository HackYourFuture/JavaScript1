'use strict'
// convert the score into a percentage
// calculate what grade corresponds with that percentage, and
// shows in the command line the result: the grade and the percentage
// When writing the script, make use of the following grade scores:
// Grade A (90% - 100%)
// Grade B (80% - 89%)
// Grade C (70% - 79%)
// Grade D (60% - 69%)
// Grade E (50% - 59%)
// Grade F (0% - 49%)


function gradeCalculator(score) {
    //To be able to show the result of decimal number I used here Math.round.
    score = Math.round(score);
    let grade;
    //I use switch by evaluating true statement.
    switch(true) {
      case (score <= 100 && score >= 90):
         grade = 'A';
         break;
      case (score <= 89 && score >= 80):
         grade = 'B';
         break;
      case (score <= 79 && score >= 70):
         grade = 'C';
         break;
      case (score <= 69 && score >= 60):
         grade = 'D';
         break;
      case (score <= 59 && score >= 50):
         grade = 'E';
         break;
      case (score <= 49 && score >= 0):
         grade = 'F';
         break; 
      default:
         console.log("You got a INVALID SCORE");
    }
    return ("You got a " +grade+ " (" +score+ "%)!");
};
console.log(gradeCalculator(1));
 