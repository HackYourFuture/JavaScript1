"use strict";
let var1 = "This is my first string";
let var2 = "And this is the second one";
let var3 = {
    name: "Sila",
    age: 26};
let var4 = {
    species: "cat",
    breed: "American Wirehair"};



console.log(typeof var1);
console.log( typeof var3);

if (typeof var1 === typeof var2){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var1 === typeof var3){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var1 === typeof var4){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var2 === typeof var3){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var2 === typeof var4){
    console.log("These two variables have the same type");

}else {
    console.log("They are not the same type");
};

if (typeof var3 === typeof var4){
    console.log("These two variables have the same type");
 
}else {
    console.log("They are not the same type");
};

if (typeof var1 !== typeof var3){
    console.log("They are not the same type");
};

if (typeof var1 !== typeof var2){
    console.log("They are not the same type");
}else {
    console.log("These two variables have the same type")
};



