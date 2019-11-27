'use strict'
const bestDefender = ["Van Dijk", "Ramos", "Söyüncü"];
const bestForward = ["Messi","Ronaldo","Salah","Neymar","Lewandowski","Suarez","Mbappe"];
console.log('The length of the array is... ' + bestDefender.length);
console.log('The length of the array is... ' + bestForward.length);

if (bestDefender.length === bestForward.length){
    console.log("They are the same!")
} else {
    console.log("Two different sizes!");
}