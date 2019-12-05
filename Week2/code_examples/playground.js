// Let's say a student did a test and they got a 60 out of 100,
let total = 100;
let score = 60;
// convert the score into a percentage
let percentage = ((score/total)*100 +'%');

// Use either a switch or if/else statement

if (score >= 90) {
  console.log('A');
} 
else if(score >= 80){
  console.log('B');
}

else if(score >= 70){
  console.log('C');
}

else if(score >= 60){
  console.log('D');
}

else if(score >= 50){
  console.log('E');
}
else if(score >= 0){
  console.log('F');
}
else {
  console.log('NaN');
}


function convertToPct(score) {
// Make the return value of the function a template string
 return (`You got a (${percentage})!`)
}

let pct = convertToPct(score)
console.log(pct)


