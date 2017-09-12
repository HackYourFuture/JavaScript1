# REVIEW JavaScript week 3

```
This review covers:
• More CLI
• Scope, closures and 'this'
• Array Manipulations 
• Basic DOM manipulations
• Code commenting
```

## More CLI
Check out the CLI review here: https://github.com/HackYourFuture/CommandLine/blob/master/Lecture-2.md

## Scope, closures and 'this'
Scope, closure and 'this' are about *context*. 

This post explains things really well: [Recommended read by Todd Motto on Scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)

In this review we won't go over how JavaScript implements scope. We would just be rewriting the above post by Todd Motto.

Instead, let's focus on a couple of important **words** that are used in explaining scope. Understanding the JavaScript side of things can be difficult if we don't fully understand these words. 

### How to think about context?
Consider the following sentences: 
> Eyad is a great cook. *He* loves to make ravioli.

> Gijs is a great cook. *He* loves to make ravioli. 

In both cases, the second sentence is the exact same. However, the word *he* refers to a completely different person. He is defined by the context.

A second example:
> *He* loves to make ravioli.

Now, when this sentence is written down without *he* being defined in the context, the sentence doesn't make any sense. 

### Context in programming:
A JavaScript example: 
```
function myFunction() {
	const a = 'ravioli'
	console.log(a)
}
```

```
function myFunction() {
	console.log(a)
}
```

In both cases, `console.log(a)` is the exact same. However, the context defines the value of a and whether it is defined at all. 

### The Scope of the Context 
Let's first look at a definition of `scope`
> (1) the extent of the area or subject matter that something deals with or to which it is relevant.
> (2) the opportunity or possibility to do or deal with something.

So in words more applicable to our situation scope means:
> code that is within the reach of our code. 

Consider two completely different JavaScript files
```
// aFile.js
const a = 10
```

```
// anotherFile.js
console.log(a)
```

When we run these files separately, the `console.log(a)` statement in anotherFile.js of course cannot reach `var a = 10`. Why? It is beyond the scope of our context. When we run a file in JavaScript, the program creates a new top-level context we call the global scope.

From now on, we'll call 'scoped context' simply 'scope'.

### Creating Scope within a Program
Just like two programs have an completely different scope, we can also create different scopes within a program. We do the same in our language:
> Eyad is a great cook. *He* loves to make ravioli. Gijs is great at finding the best ingredients. *He* has a real nose for it.

At school one learns that *he* will refer to the last masculine subject introduced to the text. There are rules constraining this. In programming we rely a lot on context, and the rules are more strict than in natural language.

There are *five different ways* we can create a new context in JavaScript:
- The global context (as we already saw)
- The simple function context 
- The object construction context 
- The object method context
- The event listener context

More info on this in this great post

## Array Manipulation
[MDN on Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
As we know by now, arrays are collections of values. 

As we will see, there are often many ways to achieve the same thing when working arrays. Over time, you will add different techniques to your mental toolbox to achieve the result you want quickly. 

The basics. 

- How do we create an array?
- How do we add items to an array?
- How do we change items of an array?
- How do we remove items from an array?
- How do we know the length of an array?
- How do we iterate over an array?


### How do we create an array?
An array can be created multiple ways 

From scratch: 
```
const a = [] // result: []
const b = ['item1', 'item2'] // result: ['item1', 'item2']
const c = new Array() // result: []
const d = new Array('item 1', 'item2') // result: ['item1', 'item2']
const e = new Array(20) // result: [ <20 empty items> ]
const f = new Array(20, 21) // result: [20, 21]
// Note that `e` and `f` are a beautiful example of how weird and unexpected JavaScript can be. You will probably use `a` most often.
```

From value (as an example, many ways to create an array from another value):
```
const a = 'hello world' // result: 'hello world'
const b = a.split(' ') // result:  ['hello', 'world' ]
```

### Array length
Every array has as a 'static' property `length`. Meaning that we can easily get the amount of items in an array.
```
const f = ['hi','there']
console.log(f.length) // 2
```

### Array index
We can access array elements through the position of the element in the array. This is called an index. Indices (plural of index) are 0-based, meaning that the first item's index is 0, the second element is 1.

```
const x = ['first', 'second', 'third']
console.log(x[0]) // 'first'

x[3] = 'fourth'
```

Note that arrays can have empty values. This should be avoided usually to prevent unexpected behaviour. 
```
x[10] = 'eleventh'
console.log(x) // [ 'first',  'second',  'third',  'fourth',  <6 empty items>,  'eleventh' ]
```

Next to the index, we have a wide range of tools to manipulate arrays.

### Array methods
These  methods are essential. 

**Extremely important is to remember to always ask these two questions**:
• What is the return value of this method?
• What does this method do to the original array it is used on?

**Adding items**
• [`.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Add item to end of array
• [`.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) Add item to beginning of array

**Removing items**
• [`.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Remove first element from array
• [`.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) Remove last element from array
• [`.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Remove a specific element from array using index

**Useful iterators over arrays**
• [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  creates a new array with the results of calling a provided function on every element in the calling array.
• [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) creates a new array with all elements that pass the test implemented by the provided function.
• [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sorts the elements of an array in place and returns the array
```

## Basic DOM manipulations
Using JavaScript we can access and manipulate the Document Object Model (DOM). We access the DOM through a global object called `document`. 

HTML 
```
<body>
	<div id="hello"></div>
</body>
```

A common method to access the DOM is by giving a HTML element an ID, and then using the `document` method `getElementById()`

```
const x = document.getElementById('hello')
```

Now we have stored a *reference* of how that HTML element is accessed through the DOM object. We can use this to manipulate the element.

```
x.innerHTML = 'hello'
```

We can also create elements
```
const a = document.createElement('li')
x.appendChild(a)
```



## Code Commenting
First the straightforward part: how do we place comments in our code?

### JavaScript
Single line comments
```
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";
```

Single line comments at end of the line:
```
var x = 5;      // Declare x, give it the value of 5
```

Coding **well** in JavaScript: [JSDoc](http://usejsdoc.org/)

### HTML
[W3Schools](https://www.w3schools.com/html/html_comments.asp)
Comments
```
<!-- Write 
your comments here -->

<!-- Write your comments here -->
```


### CSS
[MDN on CSS comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
```
/* Comment */

/*
A comment
which stretches
over several
lines
*/
```

### When to comment?
Now for the hard part: when to comment? When you work for different companies, you will see different styles. Embrace something you like, and then learn to let go. Google on "when to comment code?" and you'll find a big bunch of different opinions. 

The general concept is, however, that it is there to help make the code more easy to understand. Note, however, that comments can also make code more difficult to understand when not applied properly. 









