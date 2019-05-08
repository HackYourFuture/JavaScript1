// 4. Declare a variable y and assign a string to it.
var y = 'js';
let yLet = 'jsLet';
const yConst = 'jsConst';
// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
console.log("my variable 'y' is: js");
console.log("my variable 'yLet' is: jsLet");
console.log("my variable 'yConst' is: jsConst");

// 4.2 Now console.log the variable y.
console.log(y); // js
console.log(yLet); // jsLet
console.log(yConst); // jsConst

// 4.3 Now assign a new string to the variable y.
y = 'css';
yLet = 'cssLet';
yConst = 'cssConst'; // TypeError: Assignment to constant variable. Actually code will stop here. You have to comment this line to make following codes run without error.

// 4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
console.log("my variable 'y' is: css");
console.log("my variable 'yLet' is: cssLet");
console.log("my variable 'yConst' can not be assigned to new value");

// 4.5 Now console.log y again.
console.log(y); // css
console.log(yLet); // cssLet
