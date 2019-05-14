/*
Create a function called vehicle, like before,
 but takes another parameter called age, 
 so that vehicle("blue", 1, 5) 
 prints 'a blue used car'
*/

function vehicle (color, type, age){
    let types = [' car' , ' motorbike'];
    console.log('a ' + color +' ' + condition(age) + types[(type-1)]);
}
function condition(years){
    if (years<2){
        return 'new';
    } else {
        return 'used';
    }
}
vehicle('red' , 1, 3);