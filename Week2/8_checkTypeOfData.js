// 8.1 First declare at least four variables and assign them different data types
let num = 5;
let str = "name";
let arr = ["blue", "black", "Red"];
let boo = false;

// 8.2 For each variable write a console.log statement that logs the value
// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
// 8.4 Now use typeof to log the actual type of your variables.
console.log("The value of my variable 'num' is: " + num);
console.log("num is: Number");
console.log("The value of my variable 'str' is: " + str);
console.log("str is: String");
console.log("The value of my variable 'arr' is: " + arr);
console.log("arr is: Array");
console.log("The value of my variable 'boo' is: " + boo);
console.log("boo is: Boolean");

//8.5 Now compare the types of your different variables with one another.
//8.6 Make sure to also show a message when the variables you are comparing are not the same type.
function compareType(var1,var2) {
    if (typeof var1 == typeof var2) {
        console.log( "this variable have the same type");
     } else { 
        console.log("The first variable assigned to %o and the second variable assigned to %o ",typeof var1 , typeof var2 );
      } 
}
compareType(num,str);
compareType(num,arr);
compareType(num,boo);
compareType(str,arr);
compareType(str,boo);
compareType(arr,boo);
