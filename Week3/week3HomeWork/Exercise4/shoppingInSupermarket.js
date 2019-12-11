let groceryItem = ["bananas", "milk"];

function addToShoppingCart(item) {
    groceryItem.push(item);
    if (groceryItem.length > 3) {
        groceryItem.shift();
    }
    let massege = `You bought ${groceryItem} !`;

    // return massege = `You bought ${groceryItem} !"`;
    console.log(massege);
}
addToShoppingCart('apple');
addToShoppingCart('orange');
addToShoppingCart('Mango');