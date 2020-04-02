'use strict';

const numChildren = [3, 10, 5, 0, 99];
const PartnerName = ['Vahid', 'Saro', 'John', 'Omar'];
const geoLocation = ['Paris', 'London', 'Iraq', 'Amsterdam', 'Tokyo'];
const job = ['Web Developer', 'Doctor', 'Dancer', 'singer'];

function tellFortune(numChildren, PartnerName, geoLocation, job) {
  let yourNumOfKids =
    numChildren[Math.floor(Math.random() * numChildren.length)];
  let yourPartnerName =
    PartnerName[Math.floor(Math.random() * PartnerName.length)];
  let yourLocation =
    geoLocation[Math.floor(Math.random() * geoLocation.length)];
  let yourJob = job[Math.floor(Math.random() * job.length)];
  return (
    'You will be a ' +
    yourJob +
    ' in ' +
    yourLocation +
    ' and married to ' +
    yourPartnerName +
    ' with ' +
    yourNumOfKids +
    ' kids'
  );
}

console.log(tellFortune(numChildren, PartnerName, geoLocation, job));
