'use strict';
$_$wp(1);
function addToShoppingCart(list, item) {
    $_$wf(1);
    let groceryItems = ($_$w(1, 0), list);
    for (let item of ($_$w(1, 1), groceryItems)) {
        if ($_$w(1, 2), item > 3) {
            $_$w(1, 3), groceryItems.push(item);
            $_$w(1, 4), groceryItems.shift();
            return $_$w(1, 5), [groceryItems];
        }
    }
}
let groceryItems = ($_$w(1, 6), [
    'bananas',
    'milk'
]);
$_$w(1, 7), $_$tracer.log(addToShoppingCart(groceryItems, 'honey'), 'addToShoppingCart(groceryItems, \'honey\')', 1, 7);
$_$w(1, 8), addToShoppingCart(groceryItems, 'mango');
$_$w(1, 9), addToShoppingCart(groceryItems, 'Juice');
$_$wpe(1);