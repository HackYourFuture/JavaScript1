const myStr = 'naji';
const str = 'nabulsi';
const myObj = ['na', 'ba'];
const obj = ['an', 'ab'];
if (typeof myStr == typeof str) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof myStr == typeof myObj) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof myStr == typeof obj) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof str == typeof myObj) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof myObj == typeof obj) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}