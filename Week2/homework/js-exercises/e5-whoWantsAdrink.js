'use strict'

const drinkTypes = ['cola', 'lemonade', 'water'];

// let randomDrink = function (array,numberOfShuffels) {
//     let drinkTray=[];
//     for (let i = 0; i < numberOfShuffels; i++) {
//         drinkTray.push(array[i % array.length]);
//     }
//     return drinkTray;
// }   

// console.log(`Hey guys, i brought a ${randomDrink(drinkTypes,5)}!`)



// let randomDrink = function (array,numberOfShuffels) {
//     let drinkTray=[];
//     for (let i = 0; i < numberOfShuffels; i++) {
//         drinkTray.push(array[i % array.length + Math.floor(Math.random() * array.length)])
//     }
//     return drinkTray;
// }   

// console.log(randomDrink(drinkTypes,5))


// let randomDrink = function (arr,n) {
//   let drinkTray=[];
//   arr = [...arr];
//   for (let i = 0; i < n; i++) {
//     const randomPick = Math.floor(Math.random() * arr.length);
//     if(drinkTray.includes(arr[randomPick])) {
//       arr.splice(randomPick, 1);
//     }
//     drinkTray.push(arr[randomPick])
//   }
//   return drinkTray;
// }
// console.log(randomDrink(drinkTypes,5))
// drinkTypes;



let randomShuffle = function (array,num){
    let newList=[];

  while (newList.length < num){
    const c=Math.floor(Math.random() * array.length) [0];
    let counter= function count(arr) {
      return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
    }
    if (newList.count(c) < 2) {
      newList.push(c)
    }
  }return newList 
}

randomShuffle (drinkTypes, 4)



