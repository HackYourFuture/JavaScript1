'use strict'

var a = "fish in the see";
var b = "lion in the den";

var c = {
    alpha :"purple",
    beta:"yellow",
    theta:"cyan"
};

var d = {car:"jaguar", color:"latte"};

console.log(typeof a);
console.log(typeof b);


if (typeof a !== typeof b){
    console.log("not the same...");
}


if (typeof a !== typeof c){
    console.log("not the same...");
}


if (typeof a !== typeof d){
    console.log("not the same...");
}


if (typeof b !== typeof c){
    console.log("not the same...");
}


if (typeof b !== typeof d){
    console.log("not the same...");
}


if (typeof c !== typeof d){
    console.log("not the same...");
}

