let score = 60;


function gradeCalculator(score) {  //We define the function with using variable score
   

    let grade;

    if (score > 0 && score < 50) //We define IF-ELSE statement to calculate grade mark.
    grade = "F";
    if ( score > 49 && score < 60)
    grade = "E";
    if ( score > 59 && score < 70)
    grade = "D";
    if ( score > 69 && score < 80)
    grade = "C";
    if ( score > 79 && score < 90)
    grade = "B";
    if ( score > 89 )
    grade = "A";


    return console.log(`You got a ${grade} (${score}%)!`); //We log to console our grade with score

}


gradeCalculator(score); //We call our function.
