// 8

// 8.1
let fooString = "100";
let fooNumber = 100 ;
let fooArray = [1, 2, 3];
let fooX ;
// 8.2
console.log("the value of my variable String is: " + fooString)
console.log("the value of my variable Number is: " + fooNumber)
console.log("the value of my variable Array is: " + fooArray)
console.log("the value of my variable X is:  " + fooX)
// 8.3
console.log("the type of my variable string is : string")
console.log("the type of my variable number is : integer")
console.log("the type of my variable array is : object")
console.log("the type of my variable x is : undefined")

// 8.4
console.log(typeof fooString);
console.log(typeof fooNumber);
console.log(typeof fooArray);
console.log(typeof fooX);

// 8.5
// 8.6
if (fooString===fooNumber){
  console.log("SAME TYPE");
} else {
  console.log("NOT THE SAME TYPE")
  console.log(" fooString type is : "+typeof fooString +" , while fooNumber type is : " + typeof fooNumber)
}
if (fooString===fooArray){
  console.log("SAME TYPE");
} else {
  console.log("NOT THE SAME TYPE")
  console.log(" fooString type is : "+typeof fooString +" , while fooArray type is : " + typeof fooArray)
}
if (fooString===fooX){
  console.log("SAME TYPE");
} else {
  console.log("NOT THE SAME TYPE")
  console.log(" fooString type is : "+typeof fooString +" , while fooNumber type is : " + typeof fooX)
}
