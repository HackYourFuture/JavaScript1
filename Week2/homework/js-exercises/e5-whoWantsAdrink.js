'use strict'

const drinkTypes = ['cola', 'lemonade', 'water'];

let randomDrink = function (arr,n) {
    let drinkTray=[];
    for (let i = 0; i < n; i++) {
        drinkTray.push(arr[i % arr.length]);
    }
    return drinkTray;
}   

console.log(`Hey guys, i brought a ${randomDrink(drinkTypes,5)}!`)



// let randomDrink = function (arr,n) {
//     let drinkTray=[];
//     for (let i = 0; i < n; i++) {
//         drinkTray.push(arr[Math.floor(Math.random() * arr.length)])
//     }
//     return drinkTray;
// }   

// console.log(randomDrink(drinkTypes,5))




