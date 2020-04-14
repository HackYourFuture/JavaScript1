"use strict";

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Burak", "Ali", "Veli", "Ahmet", "Mehmet"];
const locations = ["Istanbul", "Bursa", "Izmir", "Isparta", "Ankara"];
const jobs = ["developer", "doctor", "teacher", "lawyer", "architect"];

function fortuneTeller(numChildren, partnerNames, locations, jobs) {
  const numberOfChildren = numChildren[generateRandom(numChildren.length)];
  const partnerName = partnerNames[generateRandom(partnerNames.length)];
  const geographicLocation = locations[generateRandom(locations.length)];
  const jobTitle = jobs[generateRandom(jobs.length)];
  return `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
}

function generateRandom(arrayLength) {
  const randomNumber = Math.floor(Math.random() * arrayLength);
  return randomNumber;
}

console.log(fortuneTeller(numChildren, partnerNames, locations, jobs));
