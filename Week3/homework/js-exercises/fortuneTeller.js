'use strict'
function tellFortune(number,partner,location,job){
return  `In ${time[Math.floor(Math.random()*5)]}, You will be a ${job[Math.floor(Math.random()*5)]} in ${location[Math.floor(Math.random()*5)]}, and married to ${partner[Math.floor(Math.random()*5)]} with ${number[Math.floor(Math.random()*5)]} kids.`
}
let time =[2020,2022,2024,2026,2028];
let myChildren = [3,4,5,6,7];
let myWife = ['Fatime','Patigul','Patime','Aypatem','Patemhan'];
let myLocation = ['Amsterdam','Kashgar','Urumchi','Istanbul','Medina'];
let myJob = ['Programmer','Teacher','Officeman','Businessman','Poorman'];

console.log(tellFortune(myChildren,myWife,myLocation,myJob));

