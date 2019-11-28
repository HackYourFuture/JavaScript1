//Exercise 8

'use strict';

let string1 = 'Hey JS is interesting!';
let string2 = 'But it is also challenging.';

let object1 = {
    sky: 'blue', grass: 'green', flower:'red'
};
let object2 = {
    sea: 'darkblue', mountain: 'darkgreen', sun:'tangerine'
};

console.log(typeof string1);
console.log(typeof string2);
console.log(typeof object1);
console.log(typeof object2);


if(typeof string1 == typeof string2 ){
    console.log('SAME TYPE')
} else{
    console.log('Not the same...')
};

if(typeof string1 == typeof object1){
    console.log('SAME TYPE')
} else{
    console.log('Not the same...')
};

if(typeof string1 == typeof object2 ){
    console.log('SAME TYPE')
} else{
    console.log('Not the same...')
};

if(typeof string2 == typeof object1 ){
    console.log('SAME TYPE')
} else{
    console.log('Not the same...')
};

if(typeof string2 == typeof object2 ){
    console.log('SAME TYPE')
} else{
    console.log('Not the same...')
};

if(typeof object1 == typeof object2 ){
    console.log('SAME TYPE')
} else{
    console.log('Not the same...')
};