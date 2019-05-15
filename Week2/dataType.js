// Types of Data 

let success = 'Congats! the data type of your variables is identical!';

console.log(success + ' * this is a string');

console.log(typeof success);


let failure = 'Oops! the data type of your variables is different!';

console.log(failure + ' * this is a string');

console.log(typeof failure);


let number = 1;

console.log(number + ' * this is a number');

console.log(typeof number);


let boolean = true;

console.log(boolean +  ' * this is a boolean');

console.log(typeof boolean);


let array = [0, 1, 2, 3, 4];

console.log(array + ' * this is an object');

console.log(typeof array);

// Testing type of data

if (typeof success === typeof failure) {

    console.log(success);

} else {
    console.log(failure);
}


if (typeof success === typeof number) {
    console.log(success);

} else {
    console.log(failure);
}


if (typeof boolean === typeof array) {
    console.log(success);

} else {
    console.log(failure);
}
