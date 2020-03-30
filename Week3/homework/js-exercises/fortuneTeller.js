"use strict";

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Burak", "Ali", "Veli", "Ahmet", "Mehmet"];
const locations = ["Istanbul", "Bursa", "Izmir", "Isparta", "Ankara"];
const jobs = ["developer", "doctor", "teacher", "lawyer", "architect"];

function fortuneTeller(
    numberOfChildren = 0,
    partnerName = "",
    geographicLocation = "",
    jobTitle = ""
) {
    numberOfChildren = numChildren[Math.floor(Math.random() * numChildren.length)];
    partnerName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    geographicLocation = locations[Math.floor(Math.random() * locations.length)];
    jobTitle = jobs[Math.floor(Math.random() * jobs.length)];
    return `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
}

console.log(fortuneTeller());
