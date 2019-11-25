# Lesson Plan JavaScript1 Week 3

## Agenda

The purpose of this class is to introduce to the student:

- What is a function (ES5 only)
- Wat is scope (global, functional, block)
- How to combine variables, loops & functions

## Core concepts

FIRST HALF (12.00 - 13.30)

## 1. Q&A about last week's concepts & homework

### Explanation
### Example
### Exercise
### Essence

## 2. What is a function (ES5 only)

### Explanation
Functions are a way to organize your code in to re-usable chunks.

> People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.
>
> _-- Donald Knuth_

https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/functions.md
### Example
Same link as Explanation
### Exercise
https://github.com/yash-kapila/HYF-JS1-Week3/tree/master/src
### Essence
- __Reusability__: Functions can be grouped together to make a module (or library), and then modules can be imported into your application so you can build awesome apps!
- __Abstraction__: Hide underlying details about how a piece of functionality works under the hood. You can change how things are implemented within the function without other programmers who use your function worrying aobut the exact details of how it was implemented.

And the same link as Explanation

SECOND HALF (14.00 - 16.00)

## 3. Wat is scope (global, functional, block)

### Explanation
Scopes define the visiblity of declarations of variables and functions.

The top level outside all your functions is called the _global scope_. Values defined in the global scope are accessible from everywhere in the code.

- `var` and `function` declarations are visible with function scope.
- `let` and `const` declarations are visible with block scope.

https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/scope.md
### Example
![Scopes](./assets/scopes.png)

```Javascript
let villan = "Joker";                        // | global scope
                                             // |
function myFunction() {                      // |  | function scope
    let hero = "Batman";                     // |  |
    if (hero === "Batman") {                 // |  |  | block scope
        let coHero = "Robin";                // |  |  |
        console.log(hero);                   // |  |  |
        console.log(coHero);                 // |  |  |
        console.log(villan);                 // |  |  |
    }                                        // |  |  |
    console.log("------")                    // |  |
    console.log(hero);                       // |  |
    console.log(coHero);                     // |  |
    console.log(villan);                     // |  |
}                                            // |  |
                                             // |
myFunction();                                // |
```

And the same link as Explanation 
### Exercise
What happens if we use the same variable name in different scopes?

```Javascript
function myFunction() {
    let hero = "Batman";
    if (true) {
        let hero = "The Flash";
        console.log(hero);
    }
    console.log(hero);
}

myFunction();
```
### Essence
Same link as Explanation

## 4. How to combine variables, loops & functions

### Explanation
### Example
### Exercise
### Essence
