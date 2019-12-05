'use strict';

const z = 7.25;
const a = 7 ;
console.log('A is ' + a + ' and Z is '+ z);

if (a < z) { // So we have a new variable ((b)) that holds the value of the highest variable.

    const b = z;
    console.log('The value of the variable Z is the highest');
    console.log(b);
}else{
    const b = a;
    console.log('The value of the variable A is the highest');
    console.log(b);
};

