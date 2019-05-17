// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

// How do you get the third element from that list?

// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

 let vehicles = [' car', ' motorbike', ' bike', ' caraven' ];

function vehicleType(color,code, age){
    if (age < 1) {
        age = ' used'
    } else {
        age = ' new'
    }

    if (code == 1){
        console.log('a ' + color + age + vehicles[0]);
    } else if (code == 2) {
        console.log('a ' + color + age + vehicles[1]);
    } else if (code == 3) {
        console.log('a '  + color + age + vehicles[2]);
    } else if (code == 4) {
        console.log('a ' + color + age + vehicles[3]);
    }
    
}

vehicleType('green', 3, 1);