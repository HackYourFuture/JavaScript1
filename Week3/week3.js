'use strict';
$_$wp(1);
function ccValidator(number) {
    $_$wf(1);
    let ccNum = ($_$w(1, 0), number.toString());
    let ccNumSplit = ($_$w(1, 1), ccNum.split(''));
    let lastDigit = ($_$w(1, 2), ccNum.slice(-1));
    if ($_$w(1, 3), ($_$w(1, 4), ccNum.length > 16) || ($_$w(1, 5), !/\d{16}(~W[a-zA-Z])*$/g.test(ccNum))) {
        return $_$w(1, 6), $_$tracer.log(`Invalid CC Number. \nPls check your input and try again`, '`Invalid CC Number. \\nPls check your inp...', 1, 6);
    } else if ($_$w(1, 7), lastDigit % 2 !== 0) {
        return $_$w(1, 8), $_$tracer.log(`The digits must be an even number`, '`The digits must be an even number`', 1, 8);
    }
    let sumNum = ($_$w(1, 9), ccNumSplit.join('+'));
    function countUnique(iterable) {
        $_$wf(1);
        return $_$w(1, 10), new Set(iterable).size;
    }
    let uniqueNum = ($_$w(1, 11), countUnique(ccNumSplit));
    if ($_$w(1, 12), sumNum <= 16) {
        return $_$w(1, 13), $_$tracer.log(`The digits must be greater than 16`, '`The digits must be greater than 16`', 1, 13);
    } else if ($_$w(1, 14), uniqueNum == 1) {
        return $_$w(1, 15), $_$tracer.log(`The digits must have different numbers`, '`The digits must have different numbers`', 1, 15);
    } else {
        return $_$w(1, 16), $_$tracer.log(`That is a valid CC Number ${ ccNum }`, '`That is a valid CC Number ${ ccNum }`', 1, 16);
    }
}
$_$w(1, 17), ccValidator('6666666666666622');
$_$wpe(1);