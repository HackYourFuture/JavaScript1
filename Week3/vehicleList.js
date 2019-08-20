/* 

Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

How do you get the third element from that list?

Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, 
motorbikes, caravans and bikes.". (Hint: use a for loop.)

    Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle 
    types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
 */

console.log(`------- 7 / 8 / 9 / 10 / 11 -------`);
console.log(`\n`);

const vehicleList = [`car`, `motorbike`, `caravan`, `bike`, `scooter`];
console.log(`The third element of the vehicle list is: ${vehicleList[2]}`);

function vehicle(color, vehicleIndex, age) {
  let status;
  let type;

  if (age >= 0 && age < 5) {
    status = `new`;
  } else if (age >= 5) {
    status = `used`;
  } else {
    console.log(`Error: The age can not be smaller than 0.`);
    return;
  }

  if (vehicleIndex < 0 || vehicleIndex > vehicleList.length) {
    console.log(
      `Error: vehicleIndex (${vehicleIndex}) can not be smaller than 0 or bigger than the length of vehicleList (${
        vehicleList.length
      })!`,
    );
    return;
  } else {
    type = vehicleList[vehicleIndex];
  }

  console.log(`It is a ${color} ${status} ${type}.`);
}

vehicle(`silver`, 4, 10);
vehicle(`green`, 3, 1);
vehicle(`white`, -1, 3); // added according to feedback
vehicle(`orange`, 6, 4); // added according to feedback
vehicle(`pink`, 4, -1); // added according to feedback
console.log(`\n`);

let advertisement = `"Amazing Joe's Garage, we service `;

function createAd(vehicleList, advertisement) {
  for (let i = 0; i < vehicleList.length; i++) {
    if (i === vehicleList.length - 2) {
      advertisement = advertisement + `${vehicleList[i]}s and `;
    } else if (i === vehicleList.length - 1) {
      advertisement = advertisement + `${vehicleList[i]}s."`;
    } else {
      advertisement = advertisement + `${vehicleList[i]}s, `;
    }
  }
  return advertisement;
}

console.log(createAd(vehicleList, advertisement));

vehicleList.push(`minivan`);
console.log(createAd(vehicleList, advertisement));
console.log(`\n`);
