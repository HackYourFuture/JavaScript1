"use strict";

// Exercise 3: Be your own fortune teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune.
// It takes 4 arguments: number of children (number), partner's name (string), 
// geographic location (string), job title (string).
// Randomly select values from the arrays.
// Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] 
// with [NUMBER_KIDS] kids."
// Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random values 
// that make sense
// Call the function 1 time, by passing the arrays as the argument.


const numOfChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Alenia", "Samanta", "Maria", "Seida", "Flora"];
const locations = ["Amstelveen", "Hilversum", "Bussum", "Utrecht", "Weert"];
const jobs = ["WebDeveloper", "Administrator", "Coa", "MasterStudent", "ItWorker"];


function fortuneTeller() {

    function randomSelect() {
        return Math.floor(Math.random() * 5);
    }

    return `You will be a ${jobs[randomSelect()]} in ${locations[randomSelect()]}, 
and married to ${partnerNames[randomSelect()]} with ${numOfChildren[randomSelect()]} kids.`;

}

console.log(fortuneTeller());