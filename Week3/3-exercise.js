'use strict';


let jobs = ['Teacher', 'Web developer', 'Salesman', 'Baker', 'Cashier']
let locations = ['Amsterdam', 'London', 'Baghdad', 'Delhi', 'Beirut']
let partnerNames = ['Margaret', 'Jane', 'Anna', 'Sabha', 'Moza']
let numChildren = [0 , 10, 1, 2 , 3]

function tellFortune(job, locations, partnerNames, numChildren) { 
    return `You will be a ${job[Math.floor(Math.random() * 5)]} in ${locations[Math.floor(Math.random() * 5)]}, and married to ${partnerNames[Math.floor(Math.random() * 5)]} with ${numChildren[Math.floor(Math.random() * 5)]} kids.`
}

console.log(tellFortune(jobs, locations, partnerNames, numChildren))