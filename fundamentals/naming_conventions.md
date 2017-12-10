# Naming conventions

## Background

In programming you will need to come up with appropriate names for your variables and functions.

> _The most important consideration in naming a variable is that the name fully and accurately describes the entity the variable represents. An effective technique for coming up with a good name is to state in words what the variable represents. Often that statement itself is the best variable name. It’s easy to read because it doesn’t contain cryptic abbreviations, and it’s unambiguous. Because it’s a full description of the
entity, it won’t be confused with something else. And it’s easy to remember because the name is similar to the concept._

> Source: [Code Complete 2, Steve McConnell](https://www.amazon.de/Code-Complete-Practical-Construction-Costruction/dp/0735619670)

The names you choose are for the benefit of the human consumer of your code. Foremost this human consumer will be you yourself: when writing code carefully chosen names help you to stay focussed on the business problem you are trying to solve. When the need arises to revisit your code in the future, carefully chosen names will help you to reconstruct your state of mind at the time you originally wrote the code.

In practice your code may need to be maintained by others, as you move on to other projects or jobs. For the developers doing maintenance, it is even more important to use carefully chosen names, as they do not have the benefit of having gone through your thought processes.

The consumer least interested in the names you choose is the runtime environment (i.e. the JavaScript engine in your browser or Node). The runtime environment does not mind meaningless, one-letter variable names. In fact, a process called 'minification' is sometimes used to create a minified version of your JavaScript code for running in the browser, the purpose of which is to speed up fetching your code over the Internet.

## camelCase vs PascalCase vs snake_case

These terms are used to describe the conventions for the spelling of multi-word variable (and function) names.

### camelCase

In JavaScript the convention is to spell the names of variables that contain data using _camelCase_, i.e. the first word in the variable name should start with a lower case letter and each subsequent word with an an upper case letter. It is called _camelCase_ because the hump in the middle of the word has some similarity with the hump of a camel.

Example:

```js
let myFavouriteMovies;
```

### PascalCase

This casing is restricted in JavaScript to class names and constructor functions. This style of casing was customary in the Pascal programming language. 

Example:

```js
class Movie {
  ...
}
```

### snake_case

This casing is not generally used in JavaScript except for naming global constants. In this case the variable name should be completely in upper case.

```js
const MAX_AGE = 60;
```


## Variable names for data

Variables that contain data should be named using noun phrases, i.e. have a noun as its head word. The name should be in camelCase. Example:

```js
let myFavouriteMovie;
```

If the data consists of a single item the noun should be in singular form as in the example above. If the data consists of a collection, such as a JavaScript array or a JavaScript object that is used as a keyed collection then a plural form should be used:

```js
let myFavouriteMovies;
```

Sometimes a mass noun is used as head word instead of an explicit plural form for naming a collection. Examples of mass nouns are `data`, `input`, `money`.

## Function names

Function names (exception: constructor functions, see below) should generally start with a verb to indicate the _action_ performed by the function. The name should be in camelCase. Example:

```js
function fetchMovie() {
  ...
}
```

## Constructor functions and class names

The naming convention for constructor functions, i.e. functions that are used in conjunction with the `new` keyword, and ES6 class names is to use a noun phrase in PascalCase. Example:

```js
class Movie {
  ...
}
```





