'use strict';

const a = "fish in the see";
const b = "lion in the den";

const c = {
    alpha :"purple",
    beta:"yellow",
    theta:"cyan"
};

const d = {
    car:"jaguar", 
    color:"latte"
};

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

