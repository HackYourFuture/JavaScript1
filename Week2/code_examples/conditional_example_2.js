
condition = true;
// Conditional block
 if (condition) {
   // Do this thing if condition is true
   console.log('condition is true');
 } else if (condition2) {
   // Do this if condition2 is true
   console.log('condition2 is true');
 } else {
   // finally - end up here
   console.log('condition and condition2 are false');
 }


// Programmers at some point in their career get LAZY
// They don't want to type so much
// So they make things like vi and shortcuts

// Here's the shortcut for conditional logic - TRY TO NEVER USE IT

// condition ? true thing : false thing
let x = 3;
(x > 2) ? console.log('x is greater than 2') : console.log('x is less than or equal to 2');
