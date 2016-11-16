# JavaScript fundamentals - exercices

### Given the following code:

```js
var s = "Hello";
var x = s.toLowerCase();
var l = s.length;
```

**1. Indicate the type of each:**

A. `s`  
B. `x`  
C. `s.toLowerCase(  )`  
D. `s.toLower  Case`  
E. `s.length`  
F. `l`  

----

### 2. In `var x = 5 + 6;`, what is `+`?

A. Function  
B. Operator  
C. Number  
D. Aggregator  

----

### 3. In `var x = 5 + 6;`, what is 'var'?

A. Variable  
B. Keyword  
C. Operator  
D. Constant  

----

### Given the following code:

```js
var x = z[y];
```

**4. What is `y`?**

A. Index  
B. Key  
C. Index or key  
D. Array  

----

### Given the following code:

```js
var y = 1;
var x = [1, 2, 3];
var z = x[y];
```

**5. What is `y`?**

A. Index  
B. Key  
C. Index or key  
D. Array  

----

### Given the following code:

```js
var joe = {
  name: 'Joe',
  age: 24
};
var joesName = joe.name;
var joesAge = joe['age'];
```

**6. What is `'age'` in the last line?**

A. Index
B. Key
C. Property
D. Object

**7. What are `name` and `age` of the object `joe`?**

A. Index
B. Key
C. Object
D. Property

----

### Given the following code:

```js
var y = 'length';
var x = [1, 2, 3];
var z = x[y];
```

**7. What is `y`**

A. Index  
B. Key  
C. Index or key  
D. Array  

**8. What is the element for index `1` in array `x`?**

**9. Fill in: "The value of the (...) `length` of `x` is (...)"**

----

### 10. What is the name of these functions?

A. `function a() { return true; }`  
B. `var a = function b() { return true; }`  
C. `var c = function () { return true; }`  

----

### 11. Write a function that has two parameters called `first` and `second`

----

### 12. Write a function call that passes three arguments.

----

### 13. Write code for the following

A. Declare a variable called `x` and initialize it with the string "Hello".  
B. Declare a variable called `y` and initialize it with the property `length` of `x`.  
C. Declare a variable called `z` and initialize it with the result of calling the method `toUpperCase` on `x`  
D. Declare a function called `myFunction`. This function should take two arguments, and should call the second argument with the first argument as its argument. Then, declare a variable called `f` and initialize it with an empty anonymous function, and call `myFunction` with the arguments `10` and `f`.  

----

### 14. Explain as precisely as possible (in English) what the following code does, line by line

(Tip: it should look like the items in the previous question!)

```js
var s = "HackYourFuture";
var i = s.indexOf("Your");
function sum(a, b) { return a + b; }
var s = sum(4, 5);
var r = Math.sqrt(s);
```

----

### 15. Indicate for each of these whether it is an expression or a statement:

A. `l`  
B. `l = 4;`  
C. `l == 4`  
D. `if (l == 4) { console.log("yes"); }`  
E. `console.log("yes");`  
F. `"yes"`  
G. `console.log(l == 4 ? "yes" : "no")`  
H. `function a() { return 4; }`  
I. `var a = function () { return 4; }`  

----

### 16. How can you tell whether something is a statement?

----

### 17. How can you tell whether something is an expression

----

### Given the following code:

```js
var s = "Hello".toLowerCase();
var l = s.length;

function sum(a, b) {
  return a + b;
}
var max = function (a, b) {
  return a > b ? a : b;
}

var s1 = sum(4, 5);
var s2 = 4 + 5;

if (s2 == s1) {
  console.log("same");
} else {
  console.log("not same");
}
```

**18. List all 11 *statements* in the code above**

**19. List all 23 *expressions* in the code above (BONUS!)**
