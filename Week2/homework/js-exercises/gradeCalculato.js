"use strict";

let score;
const total;

function gradeCalc (myScore,total) {

    //convert the score into a percentage
    myScore = myScore/total *100; 
    
    // check if the score is between 0..100 and if it's type is a number
    if (typeof myScore !== 'number' || score <= 0 || score >= 100)
    return "INVALID SCORE";
    
    //calculate what grade corresponds with that percentage
    let grade;
    switch(true) {
        case (myScore<50) : grade='F';
        break;
        case (myScore<60 && myScore>=50) : grade='E';
        break;
        case (myScore<70 && myScore>=60) : grade='D';
        break;
        case (myScore<80 && myScore>=70) : grade='C';
        break;
        case (myScore<90 && myScore>=80) : grade='B';
        break;
        case (myScore<=90) : grade='A';
        break;
    }
    // return string contains a grade and the score
    return `You got a ${grade} (${myScore}%)`;
}
