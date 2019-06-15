//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
//8.1 First declare at least four variables and assign them different data types.
    var a = false; //boolean
    var b = undefined;//undefind
    var c  = 200; //number
    var d = "This Is A String";//String

//8.2 For each variable write a console.log statement that logs the value
    console.log("value of a(boolean) variable is: " +a);
    console.log("value of b(undefind) variable is: " +b);
    console.log("value of c(number) variable is: " +c);
    console.log("value of d(string) variable is: " +d);

//let foo = 3;
//console.log("The value of my variable foo is: " + foo);
//(Curious to know what a foo is? Check this article on Wikipedia.)

//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log("I think type a is boolean");
console.log("I think type b is undefind");
console.log("I think type c is number");
console.log("I think type d is string");

//8.4 Now use typeof to log the actual type of your variables.
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//8.5 Now compare the types of your different variables with one another.
//8.6 Make sure to also show a message when the variables you are comparing are not the same type.
// TODO -> add a way of giving feedback if your variables don't have the same type

if (typeof a == typeof b) {
    console.log('SAME TYPE');
} else if {
    console.log('Different Type')
}