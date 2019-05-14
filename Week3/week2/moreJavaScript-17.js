let bar = 42;

let result = typeof bar;
result = typeof result; // result = typeof typeof bar;
console.log(result);