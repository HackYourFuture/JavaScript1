// 10. Use the list of vehicles to write an advertisement. So that it prints something like: `"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."`. (Hint: use a `for` loop. The output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.)

let vehicle_list = ['truck', 'pickup', 'motorbike', 'caravan', 'bike'];
let text = "Amazing Joe's Garage, we service ";

function adText(baseText, vehicles) {
  for (let i = 0; i < vehicles.length; i++) {
    if (i == vehicles.length - 1) {
      baseText += 'and ' + vehicles[i] + 's.';
    } else if (i == vehicles.length - 2) {
      baseText += vehicles[i] + 's ';
    } else {
      baseText += vehicles[i] + 's, ';
    }
  }
  return baseText;
}

console.log(adText(text, vehicle_list));
