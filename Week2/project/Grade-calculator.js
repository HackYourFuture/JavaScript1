//4. PROJECT: Grade calculator

'use strict';

let grad = 83;
let message = "";
if (grad > 100) {
    message = "this number is not correct please enter number between 0 to 100";
} else if (grad >= 90) {
    message = "your grad: F ";
} else if (grad >= 80) {
    message = "your grad: B ";
} else if (grad >= 70) {
    message = "your grad: C ";
} else if (grad >= 60) {
    message = "your grad: D ";
} else if (grad >= 50) {
    message = "your grad: E ";
} else if (grad <= 49) {
    message = "your grad: F ";
}
console.log(message + '('+ grad + "%)");