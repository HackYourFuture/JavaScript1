'use strict'
// Let's say a student did a test and they got a 60 out of 100,

// wilgert recommended to let total 50,score 40, but it results 80%, so I keep my way. 
let total = 100;
let score = 60;

// convert the score into a percentage
let percentage = ((score/total)*100 +'%');

// Use either a switch or if/else statement

if (score >= 90) {
 console.log(`You got an A (${percentage})!`);
} 
else if(score >= 80){
   console.log(`You got a B (${percentage})!`);
}
else if(score >= 70){
   console.log(`You got a C (${percentage})!`);
}
else if(score >= 60){
   console.log(`You got a D (${percentage})!`);
}
else if(score >= 50){
   console.log(`You got an E (${percentage})!`);
}
else if(score >= 0){
   console.log(`You got a F  (${percentage})!`);
}
else {
  console.log('NaN');
}

