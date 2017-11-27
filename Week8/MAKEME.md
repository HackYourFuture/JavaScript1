# Homework Week 8

```
Topics discussed this week:
• Structure for a basic SPA
• XHTTP Requests
• API calls
```


>[Here](/Week8/README.md) you find the readings you have to complete before the ninth lecture.

### Step 1: Feedback step 4 and 6 week 7

Give feedback on the SPA (Github API) and git branching homework of one of you fellow students. Please provide the feedback in an issue.

### Step 2: FINISH ALL YOUR JAVASCRIPT HOMEWORK

:point_up:

### Step 3: Read

>Read:
- JavaScript : [Closures](http://conceptf1.blogspot.nl/2013/11/javascript-closures.html)
- Everything you wanted to know about [JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
- JavaScript [Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
- 5 JavaScript [“Bad” Parts That Are Fixed In ES6](https://medium.freecodecamp.com/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81)

- More about [closures](https://www.reddit.com/r/learnjavascript/comments/1v6n8p/closure_explain_likei_am_in_high_school/?st=ixsp0mbe&sh=5526d150)
- A VERY popular [StackOverflow article](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

## Step 4: Scope and Closures

> Let's continue to learn a little more about scope and Closures. 


2. What will be the output of the following code - and more importantly - WHY? 

```js
for (var i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
}
```


3. Write a function that would allow you to do this:
```js
let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

4. You will need to create an HTML document out of the below snippet to run the below code. A hint - the code is syntactically correct but doesn't do what you would expect. Can you see why and fix it?

Don't cheat - but if you get stuck ... http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

```html 
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    
    let prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
```

5. Rewrite the code below to Async: 

```js
1.

let sum = calculateSum(2, 6);
console.log(sum);

2.

let results = $.getJSON('http://myapi.com');
showResults(results);

3.

let sum = calculateSum(2, 6);
if (sum > 8) {
    console.log('larger than 8');
}

4.

let data = $.getJSON('http://myapi.com');
data = data.map(function (x) { return x * 8; });

writeDataToFile(data);
```


### Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week8/README.md) to prepare for your next class

>Upload your homework in your "hyf-javascript3" Github repository. Make sure to create a new folder "week2" first. 
Upload your homework files inside the week2 folder and write a description for this “commit”.
Your hyf-javascript3/week2 should now contain all your homework files.
Place the link to your repository folder in Trello.