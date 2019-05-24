/*
Create a function called vehicle, like before,
 but takes another parameter called age, 
 so that vehicle("blue", 1, 5) 
 prints 'a blue used car'
*/

function vehicle(color, type, age) {
  let types = [' car', ' motorbike', 'truck', 'bus'];
  if (type > 0 && type <= types.length) {
    console.log('a ' + color + ' ' + condition(age) + types[type - 1]);
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
vehicle('red', 3, 3);
