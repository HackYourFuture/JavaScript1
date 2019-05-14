let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// lets see values
console.log(x); // [1, 2, 3]
console.log(y); // [1, 2, 3]
console.log(z); // [1, 2, 3]
// we sow that values of three array are same/ equal
// now try equality and strict equality test
console.log(x==y); //false
console.log(x===y); //false
console.log(x==z); //false
console.log(x===z); //false
console.log(y==z); //true
console.log(y===z); //true
// above, i sow that only y and z equals. well of course x is a different array even the value is same.
// i understood that i did not tested equality of values!! :)

// now i want to see y and z assigns each other
z.push(4);
console.log(y); //[1, 2, 3, 4]

// we can see values of x and z equals
console.log(x[0,1,2]==z[0,1,2]); //true