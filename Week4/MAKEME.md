# Homework Week 4

```
Topics discussed in class this week:
• Capturing user input
• Basic DOM manipulations [img src, innerHTML]
• Code debugging using the browser
• Code commenting
• Structuring code files
• Scope
• State
```

>[Here](/Week3/README.md) you find the readings you have to complete before the fourth lecture.

## Step 0: Make a small dance
Give yourself (or your neighbor) a little tap on the shoulder, you've made it to JS2! :muscle:

## Step 0: review

Week 2

- [Variables (var, let, const)](../fundamentals/variables.md)
- [Basic Data types (Strings, Numbers, Arrays, Booleans)](../fundamentals/values.md)
- [Operators](../fundamentals/operators.md)
- [Naming conventions](../fundamentals/naming_conventions.md)

Week 3

- [Advanced data types (objects)](../fundamentals/objects.md)
- [Conditional execution](../fundamentals/conditional_execution.md) <br>
- [Statements vs Expressions](../fundamentals/statements_expressions.md)<br>
- [Loops (for/while)](../fundamentals/loops.md)
- [Functions](../fundamentals/functions.md)
- [Scope](../fundamentals/scope.md)

Week 4

- Capturing user input
- Events
- [Basic DOM manipulations (img src, innerHTML)](../fundamentals/DOM_manipulation.md)
- Code debugging using the browser
- [Code commenting](../fundamentals/code_commenting.md)
- Structuring code files
- [Code formatting](../fundamentals/code_formatting.md)


## Step 1: Implement feedback

_Deadline Monday_

Your fellow students have provided you with feedback in Trello. 

- Implement both feedback from Trello and Github.
- Check on one of your fellow students code and issues and see if her or she implemented their feedback correctly. If there are some things that can be improved make an issue suggesting further improvements. If you think that the feedback has been implemented correctly create a issue saying something like: "nice work you can clear your issues".

## Step 2: Reorganize your Github 

_Deadline Monday_

Your Github should contain two repositories called `hyf-javascript1` and `hyf-javascript2`. Inside the JavaScript repositories you should have three folders, called week1, week2, and week3 (or something similar). Inside these folders you should have the different assignments (a file per exercises). Try and find proper names for the exercises that reflect somehow what is going on in the code. Avoid using spaces in your file names, this makes it harder to "run" you files. Also make sure that all your JavaScript files have a `.js` extension.

## Step 3: Custom DOM manipulation challenge :mortar_board:

_Deadline Saturday_

1. Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> `harry_potter_chamber_secrets`). 

2. Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

3. Make a function (or functions) that generate a `ul` with `li` elements for each book ID in the array using a for loop. 

4. Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author. 

5. Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

6. Beautify your html page with css, add sources and alts to each of the images.
 
7. Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. `{"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}`). Now loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before_)

```
How to hand in your homework:
• Upload your homework in your "hyf-javascript2" Github repository. Make sure to create a new folder "week1" first. 
• Upload your homework files inside the week1 folder and write a description for this “commit”.
• Your hyf-javascript2/week1 should now contain an index.html, main.css and a script.js file (and the images folder)
• Place the link to your repository folder in Trello.
```

## Step 4: **FreeCodeCamp challenges:**

_Deadline Sunday morning_

- https://www.freecodecamp.com/challenges/declare-javascript-objects-as-variables
- https://www.freecodecamp.com/challenges/make-instances-of-objects-with-a-constructor-function
- https://www.freecodecamp.com/challenges/make-unique-objects-by-passing-parameters-to-our-constructor
- https://www.freecodecamp.com/challenges/make-object-properties-private


And just for fun ... https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week4/README.md) to prepare for your next class

## :boom: Bonus homework :boom:
the Bonus homework for this week (for those of you want an extra challenge) do the following:

- Sign up on codewars.com
- In you account setting under “clan” write “Hack Your Future” 
- Go do the challenges in the following playlist: https://www.codewars.com/collections/fun-fun-fundamentals

Codewars is really a lot of fun, and you can compete against each other who has the most points :trollface:
it’s a great way to really practice JavaScript a lot in various problems.

Please note, there are various challenges all sorted on difficultly called KIU. Kiu 8 is the easiest, Kiu 1 is the hardest, we expect you to do challenges around level 8, 7 maybe.

enjoy!

:octocat: 
```
How to hand in your homework:
• Create a new repository "hyf-javascript2". Also create a new folder "week1" inside this repository. 
• Upload your homework files inside the week1 folder and write a description for this “commit”.
• Your hyf-javascript2/week1 should now contain the files of your homework.
• Place the link to your repository folder in Trello.
```

:star: Additional resources and review: [here](/Week3/REVIEW.md):star: