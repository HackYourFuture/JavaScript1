'use strict'

const myReceipe = {
    name: 'Chicken saute',
    serves: 2,
    ingredients: [
        '500gr chicken breast',
        'olive oil',
        'salt',
        'black and red pepper'
    ]
}

let keys = Object.keys(myReceipe);
let values = Object.values(myReceipe);

for(let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} : ${values[i]}`)
}
