# Homework Week 3

## Read:
- https://github.com/HackYourFuture/JavaScript/blob/laurens_thomas/Week3/README.md

## Challenges:
- https://www.freecodecamp.com/challenges/declare-javascript-objects-as-variables
- https://www.freecodecamp.com/challenges/make-instances-of-objects-with-a-constructor-function
- https://www.freecodecamp.com/challenges/make-unique-objects-by-passing-parameters-to-our-constructor
- https://www.freecodecamp.com/challenges/make-object-properties-private

And a custom DOM manipulation challenge :mortar_board:

1. Open a new js file and start by declaring in array with in there 10 strings. These strings should be of book title's you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets --> `harry_potter_chamber_secrets`). 

2. Create a basic html file called inxed.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

3. Make a function (or functions) that generate a `ul` with `li` elements for each book ID in the array using a for loop. 

4. Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author. 

5. Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

6. Beautify your html page with css, add sources and alts to each of the images.
 
7. __Optional (expert)__ Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over this array (_hint: Object.keys(objectName) gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before_)
