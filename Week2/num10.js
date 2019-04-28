// 10
console.log("we can store multiple types in an Array ")

// 10.1
let multibleTypes = [100, "Abdullah", true];
console.log("here is the elements of the array :" + multibleTypes);

// 10.2
console.log("the type of " + multibleTypes[0] + " is :" + typeof multibleTypes[0])
console.log("the type of " + multibleTypes[1] + " is :" + typeof multibleTypes[1])
console.log("the type of " + multibleTypes[2] + " is : " + typeof multibleTypes[2])

// 10.3

let x = 6/0;
let y = 10/0;
if (x===y){
  console.log("comparing is possible because " + x + "=" + y);
} 
if (x > y){
  console.log("6/0 is greater than 10/0");
}
if (x < y) {
  console.log("10/0 is greater than 6/0")
}
