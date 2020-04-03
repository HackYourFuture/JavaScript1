"use strict";

function tellFortune(
  numChildren1 = 0,
  partnerNames1 = "",
  locations1 = "",
  jobs1 = ""
) {
  numChildren1 = numChildren[Math.floor(Math.random() * numChildren.length)];
  partnerNames1 = partnerNames[Math.floor(Math.random() * partnerNames.length)];
  locations1 = locations[Math.floor(Math.random() * locations.length)];
  jobs1 = jobs[Math.floor(Math.random() * jobs.length)];
  return (
    "You will be a " +
    jobs1 +
    " in " +
    locations1 +
    ", " +
    "and married to " +
    partnerNames1 +
    " with " +
    numChildren1 +
    " kids."
  );
}

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Sophie", "Mila", "Eva", "Tess", "Lotte"];
const locations = ["Amsterdam", "Rotterdam", "Utrecht", "Leiden", "Den Haag"];
const jobs = [
  "teacher",
  "doctor",
  "financial analyst",
  "web developer",
  "recruiter"
];

console.log(tellFortune(numChildren, partnerNames, locations, jobs));

/*Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune.
It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
Randomly select values from the arrays.
Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random values that make sense
Call the function 1 time, by passing the arrays as the argument.
*/
