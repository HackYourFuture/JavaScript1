'use strict'
function tellFortune(number,partner,location,job){
return  `In ${times[Math.floor(Math.random()*times.length)]}, You will be a ${job[Math.floor(Math.random()*myJobs.length)]} in ${location[Math.floor(Math.random()*myLocations.length)]}, and married to ${partner[Math.floor(Math.random()*myWives.length)]} with ${number[Math.floor(Math.random()*myChildren.length)]} kids.`
}
const times =[2020,2022,2024,2026,2028];
const myChildren = [3,4,5,6,7];
const myWives = ['Fatime','Patigul','Patime','Aypatem','Patemhan'];
const myLocations = ['Amsterdam','Kashgar','Urumchi','Istanbul','Medina'];
const myJobs = ['Programmer','Teacher','Officeman','Businessman','Poorman'];

console.log(tellFortune(myChildren,myWives,myLocations,myJobs));

