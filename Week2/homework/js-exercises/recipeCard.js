'use strict'
let meal = {
    title: 'spaghetti',
    serve: 2,
    Ingredients: ['1 union', '2 eggs', '1 spoon of salt', '3 cup of water']
}
for (let key in meal) {
    console.log(key + ' ' + meal[key]);

}
meal.Ingredients.forEach((element) => {
    console.log(element);
})