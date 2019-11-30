'use strict'
let fruit='apple';
let user='enwer';
const car = { type: "Fiat", model: "500", color: "white" };
const team = { type: "lakers", model: "1990", color: "yellow" };

if (typeof fruit === typeof user) {
    console.log('fruit and user : SAME TYPE')
} 
else {
    console.log('fruit and user: Not the same...')
}


if (typeof fruit === typeof car) {
    console.log('fruit and car : SAME TYPE')
} 
else {
    console.log('fruit and car: Not the same...')
}


if (typeof fruit === typeof team) {
    console.log('fruit and team : SAME TYPE')
} 
else {
    console.log('fruit and team: Not the same...')
}


if (typeof fruit === typeof user) {
    console.log('fruit and user : SAME TYPE')
} 
else {
    console.log('fruit and user: Not the same...')
}


if (typeof team === typeof user) {
    console.log('team and user : SAME TYPE')
} 
else {
    console.log('team and user: Not the same...')
}


if (typeof car === typeof team) {
    console.log('car and team : SAME TYPE')
} 
else {
    console.log('car and team: Not the same...')
}