let animal = {type: "dog", name: "Pino", color: "Brown", age: "14"}

function getObjectValue(obj) {
    let txt = '';
    for (param in obj) { 
        txt += obj[param] + " "
    }; 
    return txt;
}

getObjectValue(animal);
// prints out: "dog Pino Brown 14 "


                           