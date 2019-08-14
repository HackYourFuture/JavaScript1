// 10. Use the list of vehicles to write an advertisement. So that it prints something like: `"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."`. (Hint: use a `for` loop. The output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.)

const vehiclesList = ['otobus', 'pickup', 'motorbike', 'caravan', 'bike'];

let advertisement = '';

for (let i = 0; i < vehiclesList.length; i++) {
  if (i == vehiclesList.length - 1) {
    advertisement += 'and ' + vehiclesList[i] + 's.';
  } else {
    advertisement += vehiclesList[i] + 's, ';
  }
}
console.log(`Amazing Joe's Garage, we service ${advertisement}`);
