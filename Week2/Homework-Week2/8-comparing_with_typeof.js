let k = 12;
let l = "Hi";
let m = true;
let n = ["Hello", "Hi"];
console.log("The value of my variable k is: " + k);
console.log("The value of my variable l is: " + l);
console.log("The value of my variable m is: " + m);
console.log("The value of my variable n is: " + n);
console.log("I think the type of 'k' is 'number'\n" + 
"The type of 'l' is 'string'\nThe type of 'm' is 'boolean'\nThe type of 'n' is 'object'");
if (typeof k == typeof l) {
    console.log('k and l SAME TYPE');
}
if (typeof k == typeof m) {
    console.log('k and m SAME TYPE');
}
if (typeof k == typeof n) {
    console.log('k and n SAME TYPE');
}
if (typeof l == typeof m) {
    console.log('l and m SAME TYPE');
}
if (typeof l == typeof n) {
    console.log('l and n SAME TYPE');
}
if (typeof m == typeof n) {
    console.log('m and n SAME TYPE');
}
console.log("\n");