'use strict'

let numChildren = ['2', '3', '4', '5', '6'];
let partnerName = ['Sara', 'Heba', 'Maryem', 'Layla', 'Scarlet'];
let locations = ['Usa', 'Konoha', 'Gotham', 'Newyork', 'Germany'];
let jobs = ['Teacher', 'Engeneer', 'Developer', 'Lawyer', 'Seller'];

// function select randomly from the arrays.
function tellFortune(numChildren, partnerName, locations, jobs) {
    let randomJobs = jobs[Math.floor(jobs.length * Math.random())];
    let randomChildren = numChildren[Math.floor(numChildren.length * Math.random())];
    let randomLocation = locations[Math.floor(locations.length * Math.random())];
    let randomNames = partnerName[Math.floor(partnerName.length * Math.random())];
    console.log(randomNames + " " +
        randomLocation + " " + randomJobs + " " + randomChildren);
};

tellFortune(partnerName, locations, jobs, numChildren);

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }