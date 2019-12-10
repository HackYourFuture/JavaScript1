'use strict';
$_$wp(1);
function addToShoppingCart(list, item) {
    $_$wf(1);
    if ($_$w(1, 0), list.length <= 2) {
        $_$w(1, 1), list.push(item);
        return $_$w(1, 2), $_$tracer.log(list, 'list', 1, 2);
    } else {
        $_$w(1, 3), list.shift();
        $_$w(1, 4), list.push(item);
        return $_$w(1, 5), $_$tracer.log(list, 'list', 1, 5);
    }
}
let groceryItems = ($_$w(1, 6), [
    'bananas',
    'milk'
]);
$_$w(1, 7), addToShoppingCart(groceryItems, 'mango');
$_$w(1, 8), addToShoppingCart(groceryItems, 'Juice');
$_$w(1, 9), addToShoppingCart(groceryItems, 'Lemon');
$_$wpe(1);