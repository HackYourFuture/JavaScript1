'use strict';

const howAreYou = "I\'m fine, thanks!"
const whenLifeGivesYouLemons = "I make lemon ice  cream!"

const lemon = {
    name : 'Lemon',
    lastName : 'Sun',
    age : 30}

const moon = {
    name : 'Moon',
    lastName : 'Light',
    age :300000}

if (typeof howAreYou === typeof whenLifeGivesYouLemons) {
    console.log("SAME TYPE");
} else { console.log("NOT the same, Man!!");
}

if (typeof lemon.name === typeof lemon.age) {
    console.log("SAME TYPE");
} else { console.log("NOT the same, Man!!");
}


if (typeof lemon.age=== typeof moon.lastName) {
    console.log("SAME TYPE");
} else { console.log("NOT the same, Man!!");
}


if (typeof moon.name === typeof whenLifeGivesYouLemons) {
    console.log("SAME TYPE");
} else { console.log("NOT the same, Man!!");
}


if (typeof whenLifeGivesYouLemons === typeof lemon.lastName) {
    console.log("SAME TYPE");
} else { console.log("NOT the same, Man!!");
}

if (typeof moon.name === typeof moon.lenght) {
    console.log("SAME TYPE");
} else { console.log("NOT the same, Man!!");
}
