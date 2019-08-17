const vehicleCodes = ['plane', 'car', 'motorbike','caravan','bike'];

function vehicle(color, code, age) {
    const valueOfColor = color;
    const valueOfCode = vehicleCodes[code];
    const valueOfAge = age <= 1 ? 'new' : 'used';
    console.log('a '+valueOfColor, valueOfAge, valueOfCode)
};
vehicle("green", 3, 1);

function advertisement() {
    let strLast = vehicleCodes[vehicleCodes.length-1];
    let arr1 = vehicleCodes.slice(0, [vehicleCodes.length-1]);
    let str1 = arr1.toString();
    let str2 = str1.replace(/,/g,', ');
    console.log("Amazing Joe's Garage, we service "+str2+' and '+strLast+'.');
};
advertisement();

// for (const code of vehicleCodes) {
//     console.log(code);
// };

// vehicleCodes.forEach(showEachElement)
// function showEachElement(code) {
//     console.log(code);
// };