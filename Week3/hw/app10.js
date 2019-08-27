// 10. Use the list of vehicles to write an advertisement. So that it prints something like: `"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."`. (Hint: use a `for` loop. The output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.)

let vehicle_list = ['truck', 'pickup', 'motorbike', 'caravan', 'bike'];
let text = "Amazing Joe's Garage, we service ";

function adText(param1, param2) {
  for (let i = 0; i < param2.length; i++) {
    if (i == param2.length - 1) {
      param1 += 'and ' + param2[i] + 's.';
    } else if (i == param2.length - 2) {
      param1 += param2[i] + 's ';
    } else {
      param1 += param2[i] + 's, ';
    }
  }
  return param1;
}

console.log(adText(text, vehicle_list));
