"use strict";

let x = "car";
let y = "truck";

let Volvo = {
    "model":2013
};
let Ford = {
    "model":2015
};

console.log(typeof(x));
console.log(typeof(Volvo));

if(typeof x ===  typeof y){

    console.log("SAME TYPE");
}else{
    console.log("NOT THE SAME");
}
if(typeof x ===  typeof Volvo){
    console.log("SAME TYPE");
}else{
    console.log("NOT THE SAME");
}
if(typeof x ===  typeof Ford){
    console.log("SAME TYPE");
}else{
    console.log("NOT THE SAME");
}
if(typeof y ===  typeof Volvo){
    console.log("SAME TYPE");
}else{
    console.log("NOT THE SAME");
}
if(typeof y ===  typeof Ford){
    console.log("SAME TYPE");
}else{
    console.log("NOT THE SAME");
}
if(typeof Volvo ===  typeof Ford){
    console.log("SAME TYPE");
}else{
    console.log("NOT THE SAME");
}







