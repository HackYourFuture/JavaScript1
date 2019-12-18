'use strict'

// question was not clear enough, had to do it both ways. 

function calculateDogAgeInHumanYears (age) {

    const puppyAge= age*7;
    return console.log(`Your doggie is ${puppyAge} years old in human years!`);
}

calculateDogAgeInHumanYears (20);


function calculateHumanAgeInDogYears (age) {

    const humanAge= age/7;
    return console.log(`Your human age is ${humanAge} congrats doggie!`);
}

calculateHumanAgeInDogYears (20);
