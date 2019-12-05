'use strict';

const x = 9;
const y = 67;

// console.log('x is ' + typeof x + ' and y also is ' +typeof y); // to be sure

const aboutMe = {
    name : 'Jalal',
    lastName : 'Al Attar',
    age : 31,
    married : true
}
const aboutMyDaughter = {
    name : 'Elena',
    lastName : 'Al Attar',
    age : 4,
    married : false
}
// console.log('aboutMe is ' + typeof aboutMe + ' and aboutMyDaughter is also ' + typeof aboutMyDaughter); // to be sure

// NOW 
if (typeof x === typeof aboutMe.age){

    console.log('I\'m sure these are the SAME TYPE because I checked it before ;)');

}else{
    console.log('SAME TYPE');
}
if (typeof aboutMe.married === typeof aboutMyDaughter.age){

    console.log('SAME TYPE');
    
}else{
    console.log('Of course it\'s not the SAME TYPE');
}
