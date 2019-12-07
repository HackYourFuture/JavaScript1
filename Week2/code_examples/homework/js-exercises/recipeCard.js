'use strict';
const recipe = {
    name : 'rice',
    serves : 3,
    ingredients :[
        'rice',
        'oil',
        'salt',
        'Vermicelli',
    ]
};



for(let info in recipe){
    console.log(`${info} : ${recipe[info]}`);
}