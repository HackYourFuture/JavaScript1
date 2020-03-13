'use strict'
// I thought to add a second parameter of total so that different systems of scores can be used, e.g. 5-point scale, 10-point scale, 100-point scale. So you you enter your score as the first parameter and the total as the second.
function calcGrade (score, total=100) {
  let percent = Math.round((score/total)*1000)/10; //convert the score into a percent and round it to one decimal, if the result is has decimals
  
  // Put a conditional switch on a boolean so taht the case excutes when the condition is true
    switch(true) {
      case percent >=0 && percent <50: console.log(`You got an F (${percent}%)!`);
        break;
      case percent >=50 && percent <60: console.log(`You got an E (${percent}%)!`);
        break;
      case percent >=60 && percent <70: console.log(`You got a D (${percent}%)!`);
        break;
      case percent >=70 && percent <80: console.log(`You got a C (${percent}%)!`);
        break;
      case percent >=80 && percent <90: console.log(`You got a B (${percent}%)!`);
        break;
      case percent >=90 && percent <=100: console.log(`You got a D (${percent}%)!`);
        break;
        // The default statement for cases when the percent is outside the established boundaries, e.g. switched the total and the score, etc.
      default: console.log("The values you entered are incorrect");
    }

  
}
// Examples of functions running with different values and different scales and one case if total is omitted so that the default value of hundred is used
calcGrade(50, 100);
calcGrade(65, 100);
calcGrade(50, 60);
calcGrade(7, 10);
calcGrade(35, 40);
calcGrade(90);
