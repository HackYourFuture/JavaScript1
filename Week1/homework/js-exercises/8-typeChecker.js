'use strict'
function dataTypeCheck(dataType1, dataType2){

    if (typeof dataType1 == typeof dataType2){
        console.log("SAME TYPE");
    }
    else{
        console.log("NOT SAME TYPE");
    }
}

let myFavouriteMovie = "Shrek";
let myFavouriteTvShow = "Friends";
let myPersonal = {name:"Saoud", age: 26, weight:"70kg"};
let myFavouriteCar = {name:"dodge charger", color: "black"};

console.log(typeof myFavouriteMovie);
console.log(typeof myPersonal);

dataTypeCheck(myFavouriteMovie, myPersonal);
dataTypeCheck(myFavouriteMovie, myFavouriteCar);
dataTypeCheck(myFavouriteMovie, myFavouriteTvShow);
dataTypeCheck(myFavouriteTvShow, myPersonal);
dataTypeCheck(myFavouriteTvShow, myFavouriteCar);
dataTypeCheck(myPersonal, myFavouriteCar);

