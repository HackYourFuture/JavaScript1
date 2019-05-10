// Question 8
let firstVariable = "First Variable";
let secondVariable = 23;
let thirdVariable = [];
let fourthVariable = true;

console.log("The value of my firstVariable is: " + firstVariable);
console.log("The value of my secondVariable is: " + secondVariable);
console.log("The value of my thirdVariable is: " + thirdVariable);
console.log("The value of my fourthVariable is: " + fourthVariable);


function checkType(variable1,variable2) {
    if(typeof variable1 == typeof variable2) {
        return "SAME TYPE";
    } else {
        return "DIFFERENT TYPE";
    }
}

console.log(checkType(firstVariable,secondVariable));