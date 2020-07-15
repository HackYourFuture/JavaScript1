'use strict'

function typeChecker (a, b){
    console.log(typeof a);
    console.log(typeof b);

    if(typeof a === typeof b){
        console.log("SAME TYPE")
    } else{
        console.log("Not the same...")
    }
}

let city = "Leiden";
let province = "Zuid Holland";
let person = {
    firstName:"Merve",
    lastName:"Aras"
}
let car = {
    color: "Red",
    wheels: 4,
}

typeChecker(city,province);
typeChecker(city, person);
typeChecker(city, car);
typeChecker(province, person);
typeChecker(province, car);
typeChecker(person, car);