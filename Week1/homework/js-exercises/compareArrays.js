'use strict'
const bestDefenders = ["Van Dijk", "Ramos", "Söyüncü"];
const bestForwards = ["Messi","Ronaldo","Salah","Neymar","Lewandowski","Suarez","Mbappe"];
console.log('The length of the array is... ' + bestDefenders.length);
console.log('The length of the array is... ' + bestForwards.length);

if (bestDefenders.length === bestForwards.length){
    console.log("They are the same!")
} else {
    console.log("Two different sizes!");
}
