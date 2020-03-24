'use strict';

let meal = {
        MealName : "Omlete",
        Serves : 2,
        Ingredients : ["4 eggs","2 strips of bacon","1 tsp salt/pepper"]
    };


for (const property in meal) {
    console.log(`${property}: ${meal[property]}`);
  }