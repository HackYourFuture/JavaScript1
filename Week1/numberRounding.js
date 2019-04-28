//round and compair numbers
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let numbers = [a, z];
numbers.sort(function(a, b) { return b - a; });

var highest = numbers[0];
console.log(highest);
