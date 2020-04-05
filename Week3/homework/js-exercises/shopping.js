'use strict'

//array
let grocery=['banana','mlik']

function addToShoppingCart(newItem){
  //using push method the add new item
  grocery.push(newItem)
//loop through the array and remove item if its more than 3 items
  if (grocery.length>3){
    grocery.shift()
  }
    console.log(grocery)

}
addToShoppingCart('eggs')
addToShoppingCart('cola')
addToShoppingCart('chipy')