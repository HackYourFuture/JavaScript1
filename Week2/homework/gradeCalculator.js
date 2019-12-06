'use strict';

let grade = 56
let gradeScale = ''
//given a value of the grade, or can I just make the grade = prompt（’please enter your grade‘）？

if(grade <= 100 && grade >= 90){
   gradeScale = 'A'
//the first line should limit the value between 100 and 90, but the following ones don't need a && because they already are the value left
}else if(grade >=80){
    gradeScale = 'B'
}else if(grade >=70){
    gradeScale = 'C'
}else if(grade >=60){
    gradeScale = 'D'
}else if(grade >=0){
    gradeScale = 'E'
}else{
    console.log('You have enter the wrong value.')
}

console.log('You got a ' + gradeScale + '(' + grade + '%' + ')!')