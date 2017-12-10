# Scope, closures and 'this'

Scope, closure and 'this' are about *context*.

This post explains things really well: [Recommended read by Todd Motto on Scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)

In this review we won't go over how JavaScript implements scope. We would just be rewriting the above post by Todd Motto.

Instead, let's focus on a couple of important **words** that are used in explaining scope. Understanding the JavaScript side of things can be difficult if we don't fully understand these words.

## How to think about context?
Consider the following sentences:
> Eyad is a great cook. *He* loves to make ravioli.

> Gijs is a great cook. *He* loves to make ravioli.

In both cases, the second sentence is the exact same. However, the word *he* refers to a completely different person. He is defined by the context.

A second example:
> *He* loves to make ravioli.

Now, when this sentence is written down without *he* being defined in the context, the sentence doesn't make any sense.

## Context in programming:
A JavaScript example:
```js
function myFunction() {
  const a = 'ravioli';
  console.log(a);
}
```

```js
function myFunction() {
  console.log(a);
}
```

In both cases, `console.log(a)` is the exact same. However, the context defines the value of a and whether it is defined at all.

## The Scope of the Context
Let's first look at a definition of `scope`
> (1) the extent of the area or subject matter that something deals with or to which it is relevant.
> (2) the opportunity or possibility to do or deal with something.

So in words more applicable to our situation scope means:
> code that is within the reach of our code.

Consider two completely different JavaScript files
```js
// aFile.js
const a = 10;
```

```js
// anotherFile.js
console.log(a);
```

When we run these files separately, the `console.log(a)` statement in anotherFile.js of course cannot reach `const a = 10`. Why? It is beyond the scope of our context. When we run a file in JavaScript, the program creates a new top-level context we call the global scope.

From now on, we'll call 'scoped context' simply 'scope'.

## Creating Scope within a Program
Just like two programs have an completely different scope, we can also create different scopes within a program. We do the same in our language:
> Eyad is a great cook. *He* loves to make ravioli. Gijs is great at finding the best ingredients. *He* has a real nose for it.

At school one learns that *he* will refer to the last masculine subject introduced to the text. There are rules constraining this. In programming we rely a lot on context, and the rules are more strict than in natural language.

There are *five different ways* we can create a new context in JavaScript:
- The global context (as we already saw)
- The simple function context
- The object construction context
- The object method context
- The event listener context

More info on this [in this great post](https://zellwk.com/blog/this/)

Another great article about `this`: [Understanding JavaScript Function Invocation and "this"](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/).

