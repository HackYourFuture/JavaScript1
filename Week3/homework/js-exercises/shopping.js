'use strict'

let shoppingList = ['Appel', 'pear']

function addToShoppingCart(oneMore){
    shoppingList.push(oneMore)
    if(shoppingList.length <=3 ){
        console.log(shoppingList)
        return `You bought ${shoppingList}!`}
        else{
        shoppingList.shift()
        console.log(shoppingList)
       return `You bought ${shoppingList}!`
    }
}
addToShoppingCart('coffe')
addToShoppingCart('coctail')
addToShoppingCart('cacao')