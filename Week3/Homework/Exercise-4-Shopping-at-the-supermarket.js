function addToShoppingCart(groceryItem) {

    // const myOrders = ["bananas", "milk"];

    const myOrders = [];

    for (let i = 0; i < groceryItem.length; i++) {

        myOrders.push(groceryItem[i]);

    }

    // console.log(myOrders[1]);

    if (myOrders.length > 3) {

        myOrders.shift();
        return "You bought " + myOrders + "!";

    }
    else {

        return "You bought " + myOrders + "!";
    }

}

const order1 = ["bananas", "milk"];

const order2 = ["apple", "cheese", "butter"];

const order3 = ["tomato", "cucumber", "carrot", "yogurt"];

const order4 = ["kiwi", "pear", "potato", "strawberry", "watermelon"];

console.log(addToShoppingCart(order1));

console.log (addToShoppingCart(order2));

console.log(addToShoppingCart(order3));

console.log(addToShoppingCart(order4));