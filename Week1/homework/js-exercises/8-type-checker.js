// Exercise 8: Type checker

{
    'use strict';

    console.log('Exercise 8: Type checker');

    let x = "hello";
    let y = "world";
    let book1 = { name: "ABC", year: 2019 };
    let book2 = { name: "DEF", year: 1909 };

    // check if the data type of one variable is the same as the other
    console.log(typeof x == typeof y);
    console.log(typeof x == typeof book1);
    console.log(typeof x == typeof book2);
    console.log(typeof y == typeof x);
    console.log(typeof y == typeof book1);
    console.log(typeof y == typeof book2);
    console.log(typeof book1 == typeof book2);
    console.log(typeof book2 == typeof book1);

    // 2 console.log statements to log the type of 2 variables, each with a different data type
    console.log(typeof x);
    console.log(typeof book1);

    //compare the types
    if (typeof x == typeof y) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }

    if (typeof x == typeof book1) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }

    if (typeof x == typeof book2) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }

    if (typeof y == typeof x) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }

    if (typeof y == typeof book1) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }

    if (typeof y == typeof book2) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }

    if (typeof book1 == typeof book2) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }
    if (typeof book2 == typeof book1) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the Same Type");
    }

}