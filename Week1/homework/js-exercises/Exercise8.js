"use strict";

let x = "dog";
let y = "cat";

let student1 = {
    "name":"Zekiye", 
    "age":29
};
let student2 = {
    "name":"Burak",
    "age" : 30
};

console.log(typeof(x));
console.log(typeof(student1));

if(typeof x ===  typeof y){

    console.log('SAME TYPE');
}else{
    console.log('NOT THE SAME');
}
if(typeof x ===  typeof student1){
    console.log('SAME TYPE');
}else{
    console.log('NOT THE SAME');
}
if(typeof x ===  typeof student2){
    console.log('SAME TYPE');
}else{
    console.log('NOT THE SAME');
}
if(typeof y ===  typeof x){
    console.log('SAME TYPE');
}else{
    console.log('NOT THE SAME');
}
if(typeof y ===  typeof student1){
    console.log('SAME TYPE');
}else{
    console.log('NOT THE SAME');
}
if(typeof y ===  typeof student2){
    console.log('SAME TYPE');
}else{
    console.log('NOT THE SAME');
}



