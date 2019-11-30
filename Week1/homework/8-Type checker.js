'use strict'

const y = 60;      //1
const x = 43;
const color = 'blue';
const flag = 'italy';


if(typeof y === typeof x){                //2
    console.log('SAME TYPE');
}else {
    console.log('Not the same');
}
if(typeof y === typeof color){
    console.log('SAME TYPE');
}else {
    console.log('Not the same');
}
if(typeof y === typeof flag){
    console.log('SAME TYPE');
}else {
    console.log('Not the same');
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