'use strict'

let myMeal ={

    name: 'zattar',
    serves: 2,
    ingredients:[
       '2 tablespoon dried thyme-crushed', 
        '2 tablespoon ground cumin', 
        '2 tablespoon ground coriander', 
        '2 tablespoon toasted  sesame seeds', 
        '2 tablespoon sumac', 
        '1 teaspoon kosher salt'
    ],
};
   

// for ( i=0; i<= myMeal.length; i++) {
//     console.log(myMeal);
  
// };
for ( let elem in myMeal ) {
    console.log(elem + ' : ' + myMeal[elem]);
}