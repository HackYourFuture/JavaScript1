//8

let foo = 3;
console.log("The value of my variable foo is : " + foo);
console.log(typeof foo);

let foo1 = "Hello";
console.log("The value of my variable foo1 is : " + foo1);
console.log(typeof foo1);

let foo2 = true;
console.log("The value of my variable foo2 is : " + foo2);
console.log(typeof foo2);

let foo3;
console.log("The value of my variable foo3 is : " + foo3);
console.log(typeof foo3);

if (typeof foo == typeof foo1 == typeof foo2 == typeof foo3){
    console.log("SAME TYPE")
}

else {
    console.log("DIFFERENT TYPE")
}