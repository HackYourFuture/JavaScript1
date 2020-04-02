'use strict';

function addToShoppingCart(item) {
  myList.push(item);
  if (myList.length <= 3) {
    console.log(myList);
    return `You bought ${myList}`;
  } else {
    myList.shift();
    console.log(myList);
    return `You bought ${myList}`;
  }
}
let myList = ['bananas', 'milk'];

addToShoppingCart('fries');
addToShoppingCart('peach');
addToShoppingCart('ice cream');
