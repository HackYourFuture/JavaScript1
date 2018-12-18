var o1 = { foo: "bar" };
var o2 = { foo: "bar" };
var o3 = o2; // We can't change the order like o3 = o2 

console.log(o3);

o2.too = "far";
console.log(o3); // Changing o2 changes o3

o1.soo = "car";
console.log(o3); // Changing o1 does not change o3
