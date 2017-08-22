// Three ways to declare (and initialize) variables
var code = 1;
let someOtherVariable = 'Hello';
const PROGRAM_NAME = 'debug_example.js';

let color = 'BLACK';
let age = Math.PI;

console.log(age);
console.log(age = '0'); // What will this line print? 
console.log(age == 0); // What will this line print? 
// The result of a logical operator like == === < > <= >= || && is a BOOLEAN (true, false)
console.log(age === 0); // What will this line print? 
// // === checks the TYPE and VALUE of the variable 
function printCarInfo(code, color, age) {
    if (code === 1) {
        let carState = ' used';
        if (age === 0) {
            carState = ' new';
        }
        console.log('a ' + color + carState + ' car');
    };
}
// What is the difference between '' and "" 
// I use ' because I don't have to press SHIFT to get "
printCarInfo(code, color, age);
printCarInfo(1, 'PINKISH BLUE ORANGE(1)', 0); // expect 'a PINKISH BLUE ORANGE(1) new car'
printCarInfo(0, 'PINKISH BLUE ORANGE(2)', 0); // expect nothing 
printCarInfo(1, 'Green', 0); // expect 'a Green new car'
printCarInfo(1, 'Green', 1); // expect 'a Green used car'
printCarInfo(1, 'Green', -999999); // 
printCarInfo(1, 'Green', 1000000); // 
printCarInfo(-1, null, -999999999); // expect nothing
printCarInfo('1', null, -999999999); // expect nothing
printCarInfo(1, null, -999999999); // expect 'a null used car'
printCarInfo(1, undefined, -999999999); // expect 'a undefined used car'
 printCarInfo(1); // ?????? WTF ????? expect 'a undefined used car', 'an error', 'an exception' 'a used car'
printCarInfo(2, 'Cyan', 1); // Expect nothing - code is not === 1
