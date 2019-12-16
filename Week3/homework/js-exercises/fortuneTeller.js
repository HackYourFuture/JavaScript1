"use strcit";
const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Nasrin", "Janda", "Hanaa", "Zozan", "Helen"];
const locations = ["Syria", "Iraq", "Lebanon", "Jorden", "Libia"];
const jobs = [
  "Web Developer",
  "Docter",
  "Grafic disigner",
  "Arts",
  "Tandarts"
];
function tellFortune(numberKids, partnerNames, locations, jobs) {
  let yourNumKids = numberKids[Math.floor(Math.random() * numberKids.length)];
  let yourPartnerName =
    partnerNames[Math.floor(Math.random() * partnerNames.length)];
  let yourLocation = locations[Math.floor(Math.random() * locations.length)];
  let yourJob = jobs[Math.floor(Math.random() * jobs.length)];
  return `You will be a ${yourJob} in ${yourLocation}, and married to ${yourPartnerName} with ${yourNumKids} kids.`;
}
console.log(tellFortune(numChildren, partnerNames, locations, jobs));