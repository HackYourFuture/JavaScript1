let grad = 60;
let message = "";
if (grad > 100) {
    message = "this number is not correct please enter number between 0 to 100";
} else if (grad >= 90) {
    message = "your grad is F... ";
} else if (grad >= 80) {
    message = "your grad is B... ";
} else if (grad >= 70) {
    message = "your grad is C... ";
} else if (grad >= 60) {
    message = "your grad is D... ";
} else if (grad >= 50) {
    message = "your grad is E... ";
} else if (grad <= 49) {
    message = "your grad is F... ";
}
console.log(message + grad + "%");