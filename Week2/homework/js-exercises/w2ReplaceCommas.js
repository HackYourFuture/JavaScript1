'use strict';
let myString = 'hello,this,is,a,difficult,to,read,sentence';
let newString = myString.replace(/,/g, ' ');

console.log( newString );


// ===================================================

let myString2 = 'hello,this,is,a,difficult,to,read,sentence';

let myString3 = "";
for (let i = 0; i < myString2.length; i++) {
    if(myString2[i] !== ',') {
       myString3 += myString2[i];
    }
        else{myString3 += ' '}
}

console.log(myString3);