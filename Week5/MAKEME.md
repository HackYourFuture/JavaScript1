## Homework Week 5

You are going to continue using your homework from the previous weeks, and we are going to extend it.
You will have to change some functions you wrote, and depending on how well you did you may or may
not have to change all your code ;). 

1. Extend your site with an input element. This is so the user will be able to type in text which will be later used to search the movie database for corresponding movies.

2. Also place a button near the input element. Capture the click even for this button and couple it to a function which grabs the user input from the text field and which initially logs the user input.

3. Make a function which takes a single argument. The function should make an XHR request to `http://www.omdbapi.com/?s=[SEARCH_TERM]` where the search term will be the argument. This argument will be the input the user has given you, so make sure that when the user clicks the button you call this function with the argument. 

	Look at the [documentation of the API](http://www.omdbapi.com/) and see which other query parameters they support. Mess around with this to see how changing (or adding) parameters modifies your results.

	Use the code below to make the request (change it if you need to):

```
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


4. Use the code from your previous assignment to render the new results. If you have already displayed previous results make sure you clear them (hint: `someElement.removeChild(someChild)`). Make sure you style these results, use a stylesheet for this! Also make sure you do not use javascript to construct static elements. This way you can handle the positioning of elements easier.

5. Change the layout of the page so that you only show a list of movie titles on the left side of your page. When the user hovers over a link (or maybe with a click) you want to show the additional information about the movie (poster, year etc.) on the right column. 

6. If you have any questions, ask them on slack in the class 9 channel. We want to see more questions as both you and we can learn from them, also try to help eachother!

__Bonus__: Write a function takes this array `['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']` and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast as possible!
