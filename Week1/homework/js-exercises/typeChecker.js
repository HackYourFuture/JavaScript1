'use strict'
const cars = ["Toyota", "Volvo", "BMW"];
const bicycles = ["Bianchi", "Gazelle", "Salcano"];
const myCar = "Mazda";
const myBicycle = "Gazelle";

if (typeof cars == typeof bicycles) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof cars == typeof myCar) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof cars == typeof myBicycle) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof bicycles == typeof myCar) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof bicycles == typeof myBicycle) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}

if (typeof myCar == typeof myBicycle) {
    console.log('SAME TYPE');
} else {
    console.log('Not the same...');
}