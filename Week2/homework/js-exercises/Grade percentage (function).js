
'use strict'

  


function percentage(score){
  
  
 if(score >= 90 && score <= 100){ //if the score between 90% to 100% the return a value is A
   console.log(`You got a A (${score}%)!`);   
 }
 else if(score >= 80 && score <= 89 ){
  console.log(`You got a B (${score}%)!`); 
 }
 else if(score >= 70 && score <= 79){
  console.log(`You got a C (${score}%)!`);
 }
 else if(score >= 60 && score <= 69){
  console.log(`You got a D (${score}%)!`);
 }
 else if(score >= 50 && score <= 59){
  console.log(`You got a E (${score}%)!`);
 }
 else if(score >= 0 && score <= 49){
  console.log(`You got a F (${score}%)!`);
 }
 else {
  return(`You got a X(${score}%)!`); // if the score not under 100 or - number 
 }
}

percentage (90);//  you change this value to get another output


