'use strict';

// with keyword const

/*
const myString = 'hello,this,is,a,difficult,to,read,sentence';

const removeAllTheCommas = myString.replace(/,/g, ' ');

console.log(removeAllTheCommas);
*/

// or you can use keyword let

let myString = 'hello,this,is,a,difficult,to,read,sentence';

    myString = myString.replace(/,/g , ' ');

console.log(myString);
