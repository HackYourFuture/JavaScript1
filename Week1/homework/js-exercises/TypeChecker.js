"use strict";
let book = 'It was the best of times';
let song = 'In the year 2525';
let person = {firstName:"John", lastName:"Wick", age:40, eyeColor:"green"};
let animal = {type:'cat', name:'Silly', color:'white and black'};

console.log(typeof 'book');
console.log(typeof 'animal');

if (typeof 'book' === typeof 'song') {
    console.log('SAME TYPE')
} else {
    console.log('Not the same')
};

if (typeof 'book' === typeof 'person') {
    console.log('SAME TYPE')
} else {
    console.log('Not the same')
};

if (typeof 'book' === typeof 'animal') {
    console.log('SAME TYPE')
} else {
    console.log('Not the same')
};

if (typeof 'song' === typeof 'person') {
    console.log('SAME TYPE')
} else {
    console.log('Not the same')
};

if (typeof 'song' === typeof 'animal') {
    console.log('SAME TYPE')
} else {
    console.log('Not the same')
};

if (typeof 'person' === typeof 'animal') {
    console.log('SAME TYPE')
} else {
    console.log('Not the same')
};
