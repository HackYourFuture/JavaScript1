'use strict';

function grade(num) {

    if (num >= 0 && num < 50) {
        console.log('Grade F (0% - 49%)')
    } else if (num >= 50 && num < 60) {
        console.log('Grade E (50% - 59%)')
    } else if (num >= 60 && num < 70) {
        console.log('Grade D (60% - 69%)')
    } else if (num >= 70 && num < 80) {
        console.log('Grade C (70% - 79%)')
    } else if (num >= 80 && num < 90) {
        console.log('Grade B (80% - 89%)')
    } else if (num >= 90 && num < 101) {
        console.log('Grade A (90% - 100%)')
    } else if (num >= 101) {
        console.log('Sorry, This number connot be used btween 1 and 100, Good luck')
    } else {
        console.log('Sorry, You must write a number between 0 and 100')
    }


}
// the input
grade('100')