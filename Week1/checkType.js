//using the 'typeof' and compairing types with if statement
const myName = 'abdullah';
let myAge = 33;
let myHobbies = ['swimming', 'coding', 'taking photographs'];
let iAmFunny = true;
let amIFunny = 'yes';
console.log(myName);
console.log(myAge);
console.log(myHobbies);
console.log(iAmFunny);
console.log(amIFunny);
console.log('types of my variables are: string, number, array, boolean, string \(again\)');
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof myHobbies);
console.log(typeof iAmFunny);
console.log(typeof amIFunny);


if(typeof myName === typeof myAge){
    console.log('SAME TYPE')
} else{
    console.log('NOT SAME TYPE')
}

if(typeof myAge === typeof myHobbies){
    console.log('SAME TYPE')
} else{
    console.log('NOT SAME TYPE')
}

if(typeof myHobbies === typeof iAmFunny){
    console.log('SAME TYPE')
} else{
    console.log('NOT SAME TYPE')
}

if(typeof iAmFunny === typeof amIFunny){
    console.log('SAME TYPE')
} else{
    console.log('NOT SAME TYPE')
}

if(typeof amIFunny === typeof myName){
    console.log('SAME TYPE')
} else{
    console.log('NOT SAME TYPE')
}