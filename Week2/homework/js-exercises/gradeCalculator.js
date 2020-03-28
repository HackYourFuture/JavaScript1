'use strict'
// Declare the function 
function gradeCalculate(percentage) {
    if (90 <= percentage && 100 >= percentage) { // && returns the first falsy value or the last value if none were found
        console.log(`you got A ${percentage} %`)
    } else if (80 <= percentage && 89 >= percentage) {
        console.log(`you got B ${percentage} %`)
    } else if (70 <= percentage && 79 >= percentage) {
        console.log(`you got C ${percentage} %`)
    } else if (60 <= percentage && 69 >= percentage) {
        console.log(`you got D ${percentage} %`)
    } else if (50 <= percentage && 59 >= percentage) {
        console.log(`you got E ${percentage} %`)
    } else if (49 >= percentage) {
        console.log(`you got F ${percentage} %`)
    }
}
//Invoking the Function 
gradeCalculate(91);
gradeCalculate(84);
gradeCalculate(71);
gradeCalculate(69);
gradeCalculate(50);
gradeCalculate(49);