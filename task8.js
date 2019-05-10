/* 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
8.1 First declare at least four variables and assign them different data types.
8.2 For each variable write a console.log statement that logs the value
8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables.
8.5 Now compare the types of your different variables with one another.
8.6 Make sure to also show a message when the variables you are comparing are not the same type.*/


let type1 = 21 ;
console.log ("The value of my variable type1 is: " + type1);
console.log (typeof(type1));
let type2 = ['HTML', 'CSS'] ;
console.log ("The value of my variable type2 is: " + type2);
console.log (typeof(type2));
let type3 = " Hello JavaScript " ;
console.log ("The value of my variable type3 is: " + type3);
console.log (typeof(type3));
let type4 = "Class21" ;
console.log ("The value of my variable type4 is: " + type4);
console.log (typeof(type4));

//8.5
if (typeof(type1)===typeof(type2)) {
    console.log('type1 and type2 are SameType');
}
else {
    console.log('type1 and type2 are NOT SameType');
}

if (typeof(type1)===typeof(type3)) {
    console.log('type1 and type3 are SameType');
}
else {
    console.log('type1 and type3 are NOT SameType');
}

if (typeof(type1)===typeof(type4)) {
    console.log('type1 and type4 are SameType');
}
else {
    console.log('type1 and type4 are NOT SameType');
}
 
if (typeof(type2)===typeof(type3)) {
    console.log('type2 and type3 are SameType');
}
else {
    console.log('type2 and type3 are NOT SameType');
}
 
if (typeof(type2)===typeof(type4)) {
    console.log('type2 and type4 are SameType');
}
else {
    console.log('type2 and type4 are NOT SameType');
}

if (typeof(type3)===typeof(type4)) {
    console.log('type3 and type4 are SameType');
}
else {
    console.log('type3 and type4 are NOT SameType');
}

