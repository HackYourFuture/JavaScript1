// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color,code){
    if (code == 1){
        console.log('a ' + color + ' car');
    } else if (code == 2) {
        console.log('a ' + color + ' motorbike');
    }
}


vehicleType('blue', 2);
 