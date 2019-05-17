// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicleType(color,code, age){
    if (age < 1) {
        age = 'bused'
    } else {
        age = ' new'
    }

    if (code == 1){
        console.log('a ' + color + age + ' car');
    } else if (code == 2) {
        console.log('a ' + color + age + ' motorbike');
    }
    
}

vehicleType('blue', 2, 5);