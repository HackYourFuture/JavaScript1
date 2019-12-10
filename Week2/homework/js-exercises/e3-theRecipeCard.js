'use strict'

let mealRecipe = {mealName: 'whenLazy',
                    serves: '2People',
                ingredients: ['take your phone', 
                            'open Thuisbezorgd app',
                            'choose what you want (Pizza)',
                            'pay',
                            'wait for it to arrive',
                            'share with loved ones' ]};


for (let [key, items] of Object.entries(mealRecipe)) {
    console.log(key, items)
};


