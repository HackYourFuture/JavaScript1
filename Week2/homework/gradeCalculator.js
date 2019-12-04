'use strict';

let grade = 67
//given a value of the grade, or can I just make the grade = prompt（’please enter your grade‘）？

if(grade <= 100 && grade >= 90){
    console.log('Your got a ' + 'A' + '(' + grade + '%' + ')!')
//the first line should limit the value between 100 and 90, but the following ones don't need a && because they already are the value left
}else if(grade >=80){
    console.log('Your got a ' + 'B' + '(' + grade + '%' + ')!')
}else if(grade >=70){
    console.log('Your got a ' + 'C' + '(' + grade + '%' + ')!')
}else if(grade >=60){
    console.log('Your got a ' + 'D' + '(' + grade + '%' + ')!')
}else if(grade >=0){
    console.log('Your got a ' + 'E' + '(' + grade + '%' + ')!')
}else{
    console.log('You have enter the wrong value.')
}
    