'use strict'

// function addToShoppingCart(list, item) {


//     if (list.length > 2) {
//         list.push(item)
//         return console.log(list)
//     } else {
//         list.shift()
//         list.push(item)
//         return console.log(list)
//     }

// }

// const groceryItems=['bananas', 'milk']

// addToShoppingCart(groceryItems,'mango')
// addToShoppingCart(groceryItems,'Juice')
// addToShoppingCart(groceryItems,'Lemon')

function addToShoppingCart(list, item) {

    list.push(item)

    if (list.length > 3) {
        list.shift()
        return console.log(list)
    } 
}

const groceryItems=['bananas', 'milk']

addToShoppingCart(groceryItems,'mango')
addToShoppingCart(groceryItems,'Juice')
addToShoppingCart(groceryItems,'Lemon')
