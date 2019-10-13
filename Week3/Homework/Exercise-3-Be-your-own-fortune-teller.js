function tellFortune(childrenNumbers, partnerName, location, jobTitle) {

    const myChildren = Math.floor(Math.random() * childrenNumbers.length);
    const myPartner = Math.floor(Math.random() * partnerName.length);
    const myLocation = Math.floor(Math.random() * location.length);
    const myJob = Math.floor(Math.random() * jobTitle.length);

    return "You will be a " + jobTitle[myJob] + " in " + location[myLocation] +
         ", and married to " + partnerName[myPartner] + " with " + childrenNumbers[myChildren] + " kids.";
}

const numChildren = [0, 1, 2, 3, 4];
const partnerNames = ["Camille", "Gabrielle", "Barbara", "Sara", "Ruby"];
const locations = ["Netherland", "Italy", "France", "United State", "Spain"];
const jobs = ["Programmer", "Docter", "Engineer", "Artist", "Barber"];


console.log(tellFortune(numChildren, partnerNames, locations, jobs));