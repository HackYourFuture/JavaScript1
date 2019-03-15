console.log(`More JavaScript`);
console.log(`  
Task 10 `);  // how to make a string from list elements.
let listOfVehicles = [
  'motorbike',
  'caravan',
  'bike',
  'truck',
  'plane',
  'train',
  'tram',
  'ship',
  'ferryboat',
];



let advert = "Amazing Joe's Garage, we service ";
for (let index = 0; index < listOfVehicles.length - 2; index++)
  advert = advert + listOfVehicles[index] + 's, ';
advert =
  advert +
  listOfVehicles[listOfVehicles.length - 2] +
  's' +
  ' and ' +
  listOfVehicles[listOfVehicles.length - 1] +
  's.';
console.log(advert);