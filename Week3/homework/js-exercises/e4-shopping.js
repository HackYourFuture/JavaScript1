'use strict'

function addToShoppingCart(list, item) {


    if (list.length <= 2) {
        list.push(item)
        return console.log(list)
    } else {
        list.shift()
        list.push(item)
        return console.log(list)
    }

}

let groceryItems=['bananas', 'milk']

addToShoppingCart(groceryItems,'mango')
addToShoppingCart(groceryItems,'Juice')
addToShoppingCart(groceryItems,'Lemon')