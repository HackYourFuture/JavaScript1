## Homework Week 5

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week5/README.md) you find the readings you have to complete before the sixth lecture.

### Step 0
All share a video or a resource (this can be a drawing, article or a pod cast) that was helpful for you the last few weeks with learning JavaScript. Please share this in the channel of your class in Slack. Also write as small note about what the resource i about and why you think it's so helpful (you can share more than one if you like).

### Step 1

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
If you are confused please run the code and then consult the Google for "javaScript pass by value pass by reference"

### Step 2: Feedback
Give feedback on step 2 of the homework to one of your fellow classmates.

### Step 3: Homework for JavaScript

Make a website that fetches (= to get) data asynchronously.

1) Create a new website with external js file

2) Add a button (e.g. 'click me') that when clicked `console.logs` 'you clicked me!'

3) Create a function that fetches from [The Github API](https://developer.github.com/v3/). For example from [this page] (https://api.github.com/orgs/HackYourFuture/repos) (the one we used last week). For help on this check this [SO post](https://stackoverflow.com/questions/247483/http-get-request-in-javascript)

4) Display the data that you get from the Github API on your web page.

5) Now link the two together: When you click the button -> get the data from the Github API and display it on your website

6) Make all the repositories link their own page in Github. Use the value of the key: `name` to make this work (hint: Github urls always look like this https://api.github.com/repos/HackYourFuture/[repositoryName] where [repositoryName] would be replaced by the actual `name` of the repository, for example `CommandLine`). Make sure the link opens in a new tab.

7) BONUS: if you look at this:

```js
https://api.github.com/repos/HackYourFuture/CommandLine
```

You can see `CommandLine` in the URL. These are called "query parameters" and let us specify in detail what we want from the API. Play around with this. For example you can make two buttons that either get data for a specific repository, JavaScript or Node.js. Or go even more crazy and make users type in a search box 'JavaScript' and then send that to the API by changing the repository.

<!---
3. Make a function which takes a single argument. The function should make an XHR request to `localhost:3000/movies?q=[SEARCH_TERM]` where the search term will be the argument. This argument will be the input the user has given you, so make sure that when the user clicks the button you call this function with the argument. 

   Look at the [documentation of the API](https://github.com/typicode/json-server) and see which other query parameters `json-server` support. Mess around with this to see how changing (or adding) parameters modifies your results.

4. Use the code from your previous assignment to render the new results. If you have already displayed previous results make sure you clear them (hint: `someElement.removeChild(someChild)`). Make sure you style these results, use a style sheet for this! Also make sure you do not use JavaScript to construct static elements. This way you can handle the positioning of elements easier.

5. Change the layout of the page so that you only show a list of movie titles on the left side of your page. When the user hovers over a link (or maybe with a click) you want to show the additional information about the movie (poster, year etc.) on the right column. 


 -->


```
How to hand in your homework:
• Clone your existing "hyf-javascript2" Github repository.
• Create a new folder "week2" USING THE COMMAND LINE 
• Save your homework files inside this folder. 
• When you are done with your homework use add/commit and push to upload your homework. 
• Write a description for your “commit”.
• Your hyf-javascript2/week2 should now contain all your homework files.
Place the link to your repository folder in Trello.
```

