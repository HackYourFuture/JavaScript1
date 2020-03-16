'use strict'
// I didnt understand the assignment, specifically in the part in which the function should take 4 arguments. If the function will return 4 random values from pre-defined arrays, what are the parameters of the function and the passed arguments are used for?To specify which arrays to use? I did two solutions, one in which no parameters are used, or I thought as a suggestion the function parameter can be a gender, so that the selected partner can be adjusted to the "Married to part", while all arrays are within the function, and calling it will select a random value from each array and return the generated string. The second solution will be as in the instructions, where the parameters will indicate the arrays to use.

// First Solution
function tellFortune(gender="male") {
  const fortuneBall = [
    ['no', 2, 3, 4, 6],
    ['Chris Evans', 'Henry Cavill', 'Michael B. Jordan', 'Bradley Cooper', 'Jon Hamm', 'George Costanza'],
    ['Rihanna', 'Emilia Clarke', 'Halle Berry', 'Charlize Theron', 'Lupita Nyong\'o', 'Elaine Benes'],
    ['San Francisco', 'Tokyo', 'Amsterdam', 'Magadisho', 'Paris'],
    ['lawyer', 'doctor', 'architecture', 'marine biologist', 'web developer']
  ]
  let myFortune = [];
  for(let i=0; i<fortuneBall.length; i++) {
    myFortune.push(fortuneBall[i][Math.floor(Math.random()*(fortuneBall[i].length))]);
  }
  gender === 'male' ? console.log(`You will be a ${myFortune[4]} in ${myFortune[3]}, and married to ${myFortune[2]} with ${myFortune[0]} kids.`) : console.log(`You will be a ${myFortune[4]} in ${myFortune[3]}, and married to ${myFortune[1]} with ${myFortune[0]} kids.`);
}
tellFortune("female");
tellFortune("male");
tellFortune();



// Second solution
// function tellFortune(numKids, partnerName, location, job) {
//   return `You will be a ${job[Math.floor(Math.random()*(job.length))]} in ${location[Math.floor(Math.random()*(location.length))]}, and married to ${partnerName[Math.floor(Math.random()*(partnerName.length))]} with ${numKids[Math.floor(Math.random()*(numKids.length))]} kids.`
// }
// const numChildren = ['no', 2, 3, 4, 6];
// // const malePartners = ['Chris Evans', 'Henry Cavill', 'Michael B. Jordan', 'Bradley Cooper', 'Jon Hamm', 'George Costanza'];
// const partnerNames = ['Rihanna', 'Emilia Clarke', 'Halle Berry', 'Charlize Theron', 'Lupita Nyong\'o', 'Elaine Benes'];
// const locations = ['San Francisco', 'Tokyo', 'Amsterdam', 'Magadisho', 'Paris'];
// const jobs = ['lawyer', 'doctor', 'architecture', 'marine biologist', 'web developer'];

// console.log(tellFortune(numChildren, partnerNames, locations, jobs));
