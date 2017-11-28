# Homework Week 6

```
Topics discussed this week:
• Closures
• Scope
• Events
• Callbacks
```

>[Here](/Week6/README.md) you find the readings you have to complete before the seventh lecture.

## Step 1: Feedback

_Deadline Monday_

Give feedback on `step 3` of `week 5` to one of your fellow students (do this by creating issues in Github). 

## Step 2: Git Homework

[Make these assignments](https://github.com/HackYourFuture/Git/blob/master/Lecture-3.md). For handing in homework follow the Forking workflow that is described  in our lecture-3.md  file of HackYourFuture’s Git repository (there is also a video that explains this).


## Step 3: JavaScript

_Deadline Wednesday_

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


<!-- Write assignment with more fun API -->

## Step 4: Some more JavaScript

_Deadline Saturday_

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

__Bonus__: Write a function takes this array `['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']` and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast as possible!


## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week6/README.md) to prepare for your next class


```
How to hand in your homework:
• Upload your homework in your "hyf-javascript2" Github repository. Make sure to create a new folder "week3" first. 
• Upload your homework files inside the week3 folder and write a description for this “commit”.
• Your hyf-javascript2/week3 should now contain an index.html, main.css and a script.js file (and the images folder)
• Place the link to your repository folder in Trello.
```
