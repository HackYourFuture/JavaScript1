## Homework week 5

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


## TODO:

Create a game!
 * The game uses JSON as input
 * The game should have user interaction
 * Have at least 7 different functions
 * Have at least one callback function 
 * Use objects (this can also be a source of inspiration for what kind of game to make)
 * The game has to run on an HTML page (live on Github using pages.github.io using this tutorial https://pages.github.com/ and share your link on Trello)
 * All the code needs to be commented
 * The Github page should have a README.md describing how the game/code works and a whishlist of features to be added in the future

- Create at least 1 issue (bug / feature / code improvement) on another students github game repository. Do this in pairs.
-  solve the issue proposed by another student in your github game repo. More info [here](https://hackyourfuture.slack.com/files/michahell/F31BX1XT6/Merging_a_local_branch_into_master)
    - use a local non-tracking branch and merge into master
    - or use a local tracking branch tracking your master, and push directly to master (slightly harder / more advanced)

[Example](https://www.w3schools.com/graphics/game_intro.asp) of a simple js game on w3schools
