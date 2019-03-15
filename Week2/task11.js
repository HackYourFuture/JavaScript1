console.log(`More JavaScript`);
console.log(`  
Task 11 `);  // //without touching the array add an element to a string which is made from an array
console.log('Yes');
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

listOfVehicle = listOfVehicles.push('scooter');
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