'use strict'

const y = 60;      //1
const x = 43;
const color = 'blue';
const flag = 'italy';


if(typeof y === typeof x){                //2
    console.log(true);
}else {
    console.log(false);
}
if(typeof y === typeof color){
    console.log(true);
}else {
    console.log(false);
}
if(typeof y === typeof flag){
    console.log(true);
}else {
    console.log(false);
}

console.log(typeof color);    //3
console.log(typeof flag);

console.log(typeof x);    //4
console.log(typeof color);

if(typeof color + typeof x === typeof flag ){     //5+6
    console.log('SAME TYPE');
} else {
    console.log('Not the same');

}