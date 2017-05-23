## Homework Week 5

### Git

1. Create a branch called `MyBranch` in the repository `MyFirst`.

2. Create the files `leaf1.txt`, `leaf2.txt`, `flower.txt` and `fruit.txt` and write some content in them.

3. Create a corresponding remote tracking branch on GitHub and push this branch to the Github remote you just created.

4. Merge `MyBranch` with the `master` branch

### JS


1. Extend your site with an input element. This is so the user will be able to type in text which will be later used to search the movie database for corresponding movies.

2. Also place a button near the input element. Capture the click even for this button and couple it to a function which grabs the user input from the text field and which initially logs the user input.

3. Make a function which takes a single argument. The function should make an XHR request to `http://www.omdbapi.com/?s=[SEARCH_TERM]` where the search term will be the argument. This argument will be the input the user has given you, so make sure that when the user clicks the button you call this function with the argument. 

   Look at the [documentation of the API](http://www.omdbapi.com/) and see which other query parameters they support. Mess around with this to see how changing (or adding) parameters modifies your results.

	Use the code below to make the request (change it if you need to):

```js
function loadMovies(){
	//This function keeps track of changes to the xhr request
	function processRequest() {
		console.log(xhr.readyState);
		if (xhr.readyState == 4){
			console.log("xhr request DONE SON");
			console.log(xhr.response);
                  // Call a function which renders the response
		}
	};

	console.log("retrieving movie data request");
	var requestURL = 'http://www.omdbapi.com/?s=dog';
	var xhr = new XMLHttpRequest();

	//Build an XHR request and then send it.
	//Read this for more info: https://www.kirupa.com/html5/making_http_requests_js.htm
	xhr.open('GET', requestURL, true);
	xhr.send();
	xhr.onreadystatechange = processRequest;
};
```


4. Use the code from your previous assignment to render the new results. If you have already displayed previous results make sure you clear them (hint: `someElement.removeChild(someChild)`). Make sure you style these results, use a style sheet for this! Also make sure you do not use javascript to construct static elements. This way you can handle the positioning of elements easier.

5. Change the layout of the page so that you only show a list of movie titles on the left side of your page. When the user hovers over a link (or maybe with a click) you want to show the additional information about the movie (poster, year etc.) on the right column. 

6. If you have any questions, ask them on slack in the class 9 channel. We want to see more questions as both you and we can learn from them, also try to help each other!


__Bonus__: Write a function takes this array `['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']` and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast as possible!


### More homework 

1. We learned a little bit about callbacks in JS. A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed. There is another function called `setTimeout` that will wait a specified period of time and then execute a function. For example: 

    ```js
    function doIt() {
        console.log('I am done');
    }
    setTimeout(doIt, 5000)
    ```
    If you run the above code it will wait 5 seconds and print `I am done`. Please read something about setTimeout on MDN. The first argument to the `setTimeout` call is the callback (`doIt`)

    You must write a function that takes 4 arguments.
    - A start value 
    - An end value
    - A callback to call if the number is divisible by 3 
    - A callback to use if the number is divisible by 5

    The function should generate an array containing values from start value to end value (inclusive). 

    Then the function should iterate over the array and call the second argument if the array value is divisible by 3

    The function should call the second argument if the array value is divisible by 5 

    Both functions should be called if the array value is divisible by both 3 and 5

    ```js
    THIS IS FAKE CODE 
    function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
       // make array 
       // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
    }
    threeFive(10, 15, sayThree, sayFive);

    // Should create an array [10,11,12,13,14,15]
    // and call sayFive, sayThree, sayThree, sayFive  - please make sure you see why these calls are made before you start coding
    ```


2. Please solve this problem using:
https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
 1. A for loop
 2. A while loop
 3. A do loop

3. Some practice with objects 
https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions

4. Nested loops 
https://www.freecodecamp.com/challenges/nesting-for-loops

5. We did some work with arrays - `var arr = [1,2,3]`
We can also nest arrays inside arrays like this `var arr2d = [[1,2], [3,4], [5,6]]` (for math people you can think of this as a matrix)
How would you print all the items of an array with 3 dimensions? 
How about with K dimensions? 
What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)

6. Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

```js
var x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


var y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
```
If you are confused please run the code and then consult the Google for "javascript pass by value pass by reference"

