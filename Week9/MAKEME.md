# Homework Week 9

## First off:
Now that you've each written a SPA it's time to learn from each other.
- Check the Repos list in the slack channel for your class. Review the repo of the person below you on the list (bottom will review top)
- Pull their code, using Git Clone. Test their app locally and browse the code
- Write issues for both the bad and the good parts you see.
- Implement solutions that you think the other student handled better, suggest improvements for the parts they did worse.
- Keep going until you feel you completely understand their code flow.

## Second:
Here are some resources and exercises to prepare you for the Node module.
[JavaScript : Closures](http://conceptf1.blogspot.nl/2013/11/javascript-closures.html)
[Everything you wanted to know about JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
[JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
[5 JavaScript “Bad” Parts That Are Fixed In ES6](https://medium.freecodecamp.com/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81)

https://www.reddit.com/r/learnjavascript/comments/1v6n8p/closure_explain_likei_am_in_high_school/?st=ixsp0mbe&sh=5526d150 A VERY popular StackOverflow article: http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

1. Let's continue to learn a little more about scope and Closures. 


2. What will be the output of the following code - and more importantly - WHY? 

```js
for (var i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
}
```


3. Write a function that would allow you to do this:
```js
var addSix = createBase(6);
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
