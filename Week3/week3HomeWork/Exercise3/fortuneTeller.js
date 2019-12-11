const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['Jessica', 'Wilma', 'Nadia', 'Susan', 'Angelina'];
const locations = ['Syria', 'London', 'Turkey', 'Netherland', 'Franca'];
const jobs = ['accountant', 'brogrammer', 'salesman', 'businessman', 'manager'];

function tellFortune(child, partener, location, job) {
    child = numChildren[Math.floor(Math.random() * 5)];
    partener = partnerNames[Math.floor(Math.random() * 5)];
    location = locations[Math.floor(Math.random() * 5)];
    job = jobs[Math.floor(Math.random() * 5)];
    console.log(`You will be a ${job} in ${location}, and married to ${partener} with ${child} Kids`)
}

tellFortune();

// Another way for the solution
function newTellFortune(child, partener, location, job) {
    let childern = numChildren[Math.floor(Math.random() * child)];
    let parteners = partnerNames[Math.floor(Math.random() * partener)];
    let numLocationes = locations[Math.floor(Math.random() * location)];
    let numJobs = jobs[Math.floor(Math.random() * job)];
    console.log(`You will be a ${numJobs} in ${numLocationes}, and married to ${parteners} with ${childern} Kids`)
}

newTellFortune(5, 5, 3, 4);