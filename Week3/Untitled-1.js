'use strict';
$_$wp(1);
function addToShoppingCart(list, item) {
    $_$wf(1);
    $_$w(1, 0), list.push(item);
    if ($_$w(1, 1), list.length > 3) {
        $_$w(1, 2), list.shift();
        return $_$w(1, 3), $_$tracer.log(list, 'list', 1, 3);
    }
}
const groceryItems = ($_$w(1, 4), [
    'bananas',
    'milk'
]);
$_$w(1, 5), addToShoppingCart(groceryItems, 'mango');
$_$w(1, 6), addToShoppingCart(groceryItems, 'Juice');
$_$w(1, 7), addToShoppingCart(groceryItems, 'Lemon');
$_$wpe(1);