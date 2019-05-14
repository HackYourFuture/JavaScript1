/*
Create a function named vehicleType that receives a color,
 and a code, 1 for car, 2 for motorbike. 
 And prints 'a blue motorbike' for example when 
 called as vehicleType("blue", 2)
*/

function vehicleType (color, type){
    let types = [' car' , ' motorbike'];
    console.log('a ' + color + types[(type-1)]);
}
vehicleType('blue' , 2);