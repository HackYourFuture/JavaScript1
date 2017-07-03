# Homework Week 3 (moved over from Week 2)

1. Create a function that takes two objects as parameters and compares them. You will actually need to write two functions - one that compares with `==` and one that compares with `===`. Remember that objects can have objects inside of them so you'll need to find a way to compare every element of every object (types and values). For example: 

	```js
	var obj1 = {
	    a: 1, 
	    b: 'this is the letter b', 
	    c: { foo: 'what is a foo anyway', 
	         bar: [1,2,3,4]
	    }
	}
	
	var obj2 = {
	    a: '1', 
	    b: 'this is the letter b', 
	    c: { foo: 'what is a foo anyway', 
	         bar: [1,2,3,4]
	    }
	}
	```

	In our example we'll say that `obj1 == obj2` is `true` and `obj1 === obj2` is `false`. Make sure you can see why before you write any code!

2. We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it. 

	```js
	function foo(func) {
	    // What to do here? 
	}
	
	function bar() {
	    console.log('Hello, I am bar!');
	}
	
	foo(bar);
	```


	Write some code to test two arrays for equality using `==` and `===`. Test the following:
	
	```js
	var x = [1,2,3];
	var y = [1,2,3];
	var z = y;
	```
	What do you think will happen with `x == y`, `x === y` and `z == y` and `z == x`? Prove it!
	
	> Don't cheat! Seriously - try it first.
	
	Check out this [Fiddle](http://jsfiddle.net/jimschubert/85M4z/)  

	And this [Stack Overflow question](http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript)

	**Some freeCodeCamp challenges:**

3. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

4. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

5. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)

6. We did the following example in class: 

	```js
	 var o1 = { foo: 'bar' };
	 var o2 = { foo: 'bar' };
	 var o3 = o2;
	```
	Show that changing `o2` changes `o3` (or not) and changing `o2` changes `o3` (or not). 
	
	Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? 

### Some further reading: 

Have a look at [The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
 
> ‘Coerce' means to try to change - so coercing `var x = '6'` to number means trying to change the type to number temporarily. 


<!-- Original Week 3 homework

## Read:
- https://github.com/HackYourFuture/JavaScript/blob/master/Week3/README.md

## Challenges:
- https://www.freecodecamp.com/challenges/declare-javascript-objects-as-variables
- https://www.freecodecamp.com/challenges/make-instances-of-objects-with-a-constructor-function
- https://www.freecodecamp.com/challenges/make-unique-objects-by-passing-parameters-to-our-constructor
- https://www.freecodecamp.com/challenges/make-object-properties-private

Loops practice - https://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops
https://www.freecodecamp.com/challenges/iterate-with-javascript-while-loops
https://developer.mozilla.org/en/docs/Web/JavaScript/Closures

And just for fun ... https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range

And a custom DOM manipulation challenge :mortar_board:

1. Open a new js file and start by declaring in array with in there 10 strings. These strings should be of book title's you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> `harry_potter_chamber_secrets`). 

2. Create a basic html file called inxed.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

3. Make a function (or functions) that generate a `ul` with `li` elements for each book ID in the array using a for loop. 

4. Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author. 

5. Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

6. Beautify your html page with css, add sources and alts to each of the images.
 
7. __Optional (expert)__ Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. `{"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}`). Now loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before_)

-->