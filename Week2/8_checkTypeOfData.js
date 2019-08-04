let num = 5;
let str = "name";
let arr = ["blue", "black", "Red"];
let boo = false;
console.log("The value of my variable 'num' is: " + num);
console.log("num is: Number");
console.log("The value of my variable 'str' is: " + str);
console.log("str is: String");
console.log("The value of my variable 'arr' is: " + arr);
console.log("arr is: Array");
console.log("The value of my variable 'boo' is: " + boo);
console.log("boo is: Boolean");

function compareType() {
    if (typeof num == typeof str)
        console.log("'num' and 'str' are same type")
    else if (typeof num == typeof arr)
        console.log("'num' and 'arr' are same type")
    else if ( typeof num == typeof boo)
        console.log("'num' and 'boo' are same type")
    else if ( typeof str == typeof arr)
        console.log("'str' and 'arr' are same type")
    else if ( typeof str == typeof boo)
        console.log("'str' and 'boo' are same type")
    else if ( typeof arr == typeof boo)
        console.log("'arr' and 'boo' are same type")
   else console.log("The variables have been assigned to a different types of values")
}
compareType()
