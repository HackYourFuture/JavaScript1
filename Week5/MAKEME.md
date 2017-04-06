## Homework Week 5

## Git Homework:

[Make these assignments](https://github.com/HackYourFuture/Git/blob/master/Lecture-2.md)

### Refresher
http://conceptf1.blogspot.nl/2013/11/javascript-closures.html
https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/
http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
https://medium.freecodecamp.com/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81

https://www.reddit.com/r/learnjavascript/comments/1v6n8p/closure_explain_likei_am_in_high_school/?st=ixsp0mbe&sh=5526d150
A VERY popular StackOverflow article:
http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

### Homework 

1. 
Let's continue to learn a little more about scope and Closures. 

Please solve the following three questions as a warm up to thinking about scope. 

https://www.freecodecamp.com/challenges/global-scope-and-functions
https://www.freecodecamp.com/challenges/local-scope-and-functions
https://www.freecodecamp.com/challenges/global-vs-local-scope-in-functions

2. 
What will be the output of the following code - and more importantly - WHY? 

```
for (var i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
}
```

3. 
Write a function that would allow you to do this: 

```
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

4. 
You will need to create an HTML document out of the below snippet to run the below code. A hint - the code is syntactically correct but doesn't do what you would expect. Can you see why and fix it?  

Don't cheat - but if you get stuck ... http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

```
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
```


Rewrite to Async:
```
1.

var sum = calculateSum(2, 6);
console.log(sum);

2.

var results = $.getJSON('http://myapi.com');
showResults(results);

3.

var sum = calculateSum(2, 6);
if (sum > 8) {
    console.log('larger than 8');
}

4.

var data = $.getJSON('http://myapi.com');
data = data.map(function (x) { return x * 8; });

writeDataToFile(data);
```

## TODO !!!
1. Choose two "GET" API endpoints from http://reqres.in
2. Use $.getJSON to load data from those two endpoints
3. Display the data on your web page.
4. It should not matter which endpoint is loaded first, the data should *always* look the same (you can add "?delay=<num>" after the endpoint to simulate a delay).

- Create at least 1 issue (bug / feature / code improvement) on another students github repository. Do this in pairs.
-  solve the issue proposed by another student in your github repo. More info [here](https://hackyourfuture.slack.com/files/michahell/F31BX1XT6/Merging_a_local_branch_into_master)
