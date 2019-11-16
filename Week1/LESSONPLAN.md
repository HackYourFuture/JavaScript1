# Lesson Plan JavaScript1 Week 1

## Agenda

The purpose of this class is to introduce to the student:

- The 2 types of websites: static vs. dynamic
- The pillars of web development: HTML/CSS/JavaScript
- What are variables
- How to name variables properly
- What are the basic data types
- What are the compound data types

## Core concepts

### FIRST HALF (12.00 - 13.30)

#### 1. The 2 types of websites: static vs. dynamic

##### Explanation

Static websites usually come with a fixed number of pages that have a specific layout. When the page runs on a browser, the content is literally static and doesn’t change in response to user actions. A static website is usually created with HTML and CSS 
Compared to static websites, which are purely informational, a dynamic website is more functional. It allows users to interact with the information that is listed on the page. Of course, that requires utilizing more than just HTML code.

##### Example

Examples the two different kind of websites

- Static: https://www.atlassian.com/time-wasting-at-work-infographic
- Dynamic: https://www.facebook.com/

##### Exercise

Discuss in class which claim belongs to which type of website:

    Content of Web pages can not be change at runtime.
    Server side languages such as PHP, Node.js are used.
    Content of Web pages can be changed.
    No interation with database possible.
    Interaction with database is possible
    It is faster to load as compared to the other typ of website.
    It is slower then static website.
    Lower Development costs.
    Content may change everytime the page is loaded.
    Feature of Content Management System.
    HTML, CSS, Javascript is used for developing the website.
    Same content is delivered everytime the page is loaded.
  
##### Essence

[In the link is an article with (dis)advantages of both static and dynamic websites.](https://www.spiderwriting.co.uk/static-dynamic.php)
  
      Static: 
        Advantage:
          - Flexible
          - Cheaper
        Disadvantages:
          - not updating content
          - Scalability
          
      Dynamic:
        Advantage:
          - Easy to pull in data on stuctured and organised way 
          - Content management system 
        Disadvantage:
          - Design is more fixed, becasue the pages are more of a template
          - Costs

_Show examples of static and dynamic websites_

#### 2. The pillars of web development: HTML/CSS/JavaScript

##### Explanation

- HTML defines what the content is.
- CSS defines the appearance of the page.
- JavaScript defines behavior of the page.

##### Example

- An example about relationship between HTML, CSS and Javascript using a metaphor of building a city: https://blog.codeanalogies.com/2018/05/09/the-relationship-between-html-css-and-javascript-explained/

##### Exercise

Let students create a classwork directory and create an index.html along with an app.js. Script tag should be added to the end of body tag(reason for doing so is part of JS2 Week1).

The end result should look like:

```
- js1-week1-classwork
  - index.html
  - app.js
```

##### Essence

Up until now at HackYourFuture, we have been writing websites using HTML and CSS. Even though a website written with these two languages works just fine, it is only a static page.

These static pages can interact with a visitor only through the use of forms. Once a form is filled out and submitted, a request is sent back to the server where a new static web page is constructed and eventually downloaded into the browser.

A big disadvantage of web pages like this is that the only way that a visitor has of interacting with the page is by filling out the form and waiting for a new page to load.

It doesn't exhibit any dynamic behaviour like:

1. reacting to user actions such as mouse click events or key presses.
1. rendering complex animations
1. sending requests over network to servers and fetching a response
1. and this is where JavaScript steps in.
  
#### 3. What are variables (const & let) & naming conventions

##### Explanation

In JavaScript, there are three ways of creating variables.

- var
- let
- const

While `var` has been used in JavaScript for a long period of time, `let` and `const` are recent additions having been introduced in ES6.

Three different stages of working with variables are:

- Variable Declaration
  - Declaration means creating a variable and providing it with a name. During the whole program, a variable can be declared only once.
- Variable Initialization
  - Initialization is declaring a variable and assigning it an initial value at the time of declaration. By default, all variables created in JavaScript have undefined as the default value unless explicitly given a different value.
- Variable (Re)Assignment
  - Variable assignment means throwing away the old value of a variable and replacing it with a new one. Initialization can be thought of as a special way of assignment.

##### Example

```javascript
// Variable Declaration
var firstName;
let lastName;
const age; // is this correct???

console.log(firstName);
console.log(lastName);
console.log(age);
```

```javascript
// Variable Initialization
var firstName = 'Yash';
let lastName = 'Kapila';
const age = 29;

console.log(firstName);
console.log(lastName);
console.log(age);
```

```javascript
var firstName = 'Tom';
let lastName = 'Hanks';

console.log(firstName);
console.log(lastName);

// Assigning variables to a different value
firstName = 'Hanks';
lastName = 'Tom';

console.log(firstName);
console.log(lastName);
```

##### Exercise

TODO(Could be moved to SECOND HALF)

##### Essence

Any application written in any programming language requires data or information to work with. This information can be as simple as a string, number or complex types like a list of strings, a mix of strings and numbers etc.

For example, your name and age are simple pieces of information, a string and a number respectively. On the other hand, your house address could be considered as a complex set of information including house number, street name, city, postcode and country.

Variables are simply named storage/pointer for this information.

### SECOND HALF (14.00 - 16.00)

#### 4. The basic data types (string, boolean, number, undefined, null)

TODO

#### 5. The compound data types (object, array)

TODO
