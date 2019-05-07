// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
// 8.1 First declare at least four variables and assign them different data types.
let myString = 'javascript';
let myBool = false;
let myObject = {
  name: 'Talip',
  age: 31,
  verified: true,
  skills: ['html', 'css', 'js']
};
let myArray = [3, { value: 'Talip' }, 'hyf', true, ['a', 'b', 'c']];

// 8.2 For each variable write a console.log statement that logs the value
console.log("The value of my variable 'myString' is: " + myString); // The value of my variable 'myString' is: javascript
// console.log(`The value of my variable 'myString' is: ${myString}`);
console.log("The value of my variable 'myBool' is: " + myBool); // The value of my variable 'myBool' is: false
console.log("The value of my variable 'myObject' is: " + myObject); // The value of my variable 'myObject' is: [object Object]
// console.log("The value of my variable 'myObject' is: " + JSON.stringify(myObject));  // The value of my variable 'myObject' is: {"name":"Talip","age":31,"verified":true,"skills":["html","css","js"]}
console.log("The value of my variable 'myArray' is: " + myArray); // The value of my variable 'myArray' is: 3,[object Object],hyf,true,a,b,c

// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log("The type of my variable 'myString' is: string");
console.log("The type of my variable 'myBool' is: boolean");
console.log("The type of my variable 'myObject' is: object");
console.log("The type of my variable 'myArray' is: array"); // X (must be object)

// 8.4 Now use typeof to log the actual type of your variables.
console.log(typeof myString); // string
console.log(typeof myBool); // boolean
console.log(typeof myObject); // object
console.log(typeof myArray); // object

// 8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the variables you are comparing are not the same type.
const compare = (a, b) => {
  typeof a === typeof b
    ? console.log('SAME TYPE')
    : console.log(`Your variables '${a}' and '${b}' are not the same type`);
};

compare(myObject, myArray); // SAME TYPE
compare(myString, myBool); // Your variables 'javascript' and 'false' are not the same type
// ...
