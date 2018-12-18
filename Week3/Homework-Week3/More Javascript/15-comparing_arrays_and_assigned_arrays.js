let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

x == y ? console.log("x array is equal to y array") : console.log("x array is not equal to y array");
x === y ? console.log("Type of x array is equal to type of y array") : console.log("Type of x array is not equal to type of y array");
z == y ? console.log("z array is equal to y array") : console.log("z array is not equal to y array");
z == x ? console.log("z array is equal to x array") : console.log("z array is not equal to x array");