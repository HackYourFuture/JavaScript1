'use strict';

const pasta = {
    Name : 'Carbonara',
    Serves : 2,
    Ingredients :[
        'spek',
        'kookroom',
        'salt and pepper',
        'spaghetti',
        'eggs',
    ]
};
console.log(pasta);


for(let propertyOutSeperately in pasta){
    console.log(`${propertyOutSeperately} is ${pasta[propertyOutSeperately]}`);
};
