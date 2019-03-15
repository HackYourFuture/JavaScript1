console.log(`More JavaScript`);
console.log(`  
Task 9 `); // use an array inside a function.
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


function vehicleNew(color, code, age) {
  if (age > 2) {
    age = 'used';
  } else if (age === 1) {
    age = 'brand new';
  } else {
    age = 'wrong input';
  }
  console.log('a ' + color + ' ' + age + ' ' + listOfVehicles[code]);
}

vehicleNew('blue', 2, 1);