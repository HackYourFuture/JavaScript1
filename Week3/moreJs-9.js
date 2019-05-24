/*
Change the function vehicle to use the list of question 7.
 So that vehicle("green", 3, 1) prints "a green new bike".
*/

function vehicle(color, type, age) {
  let vehicles = ['motorbike', 'caravan', 'bike', 'car'];
  // variable 'vehicles' is can be read from  moreJs-7and8.js
  // but i used it again inside of function to show you,
  // and in case you can run in a html seperately.
  if (type > 0 && type <= vehicles.length) {
    console.log('a ' + color + ' ' + condition(age) + vehicles[type - 1]);
  } else {
    console.log('!NO SUCH VEHICLE HERE');
  }
}
function condition(age) {
  if (age < 2) {
    return 'new ';
  } else {
    return 'used ';
  }
}
vehicle('green', 5, 1);
