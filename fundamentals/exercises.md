# JavaScript fundamentals - exercices

### Given the following code:

```js
var s = "Hello";
var x = s.toLowerCase();
var l = s.length;
```

**1. What are the types of the following:**

1. `s`  
2. `x`  
3. `s.toLowerCase()`  
4. `s.toLowerCase`  
5. `s.length`  
6. `l`  

----

### 2. In `var x = 5 + 6;`, what is `+`?

1. Function  
2. Operator  
3. Number  
4. Aggregator  

----

### 3. In `var x = 5 + 6;`, what is `var`?

1. Variable  
2. Keyword  
3. Operator  
4. Constant  

----

### Given the following code:

```js
var x = z[y];
```

**4. What is `y`?**

1. Index  
2. Key  
3. Index or key  
4. Array  

----

### Given the following code:

```js
var y = 1;
var x = [1, 2, 3];
var z = x[y];
```

**5. What is `y`?**

1. Index  
2. Key  
3. Index or key  
4. Array  

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

1. Index
2. Key
3. Array
4. Object

**7. What are `name` and `age` of the object `joe`?**

1. Index
2. Key
3. Object
4. Property

----

### Given the following code:

```js
var y = 'length';
var x = [1, 2, 3];
var z = x[y];
```

**7. What is `y`**

1. Index  
2. Key  
3. Index or key  
4. Array  

**8. What is the element for index `1` in array `x`?**

**9. Fill in: "The value of the (...) `length` of `x` is (...)"**

----

### 10. What is the name of these functions?

1. `function a() { return true; }`  
2. `var a = function b() { return true; }`  
3. `var c = function () { return true; }`  

----

### 11. Write a function that has two parameters called `first` and `second`

----

### 12. Write a function call that passes three arguments.

----

### 13. Write code for the following

1. Declare a variable called `x` and initialize it with the string "Hello".  
2. Declare a variable called `y` and initialize it with the property `length` of `x`.  
3. Declare a variable called `z` and initialize it with the result of calling the method `toUpperCase` on `x`  
4. Declare a function called `myFunction`. This function should take two arguments, and should call the second argument with the first argument as its argument. Then, declare a variable called `f` and initialize it with an empty anonymous function, and call `myFunction` with the arguments `10` and `f`.  

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

1. `l`  
2. `l = 4;`  
3. `l == 4`  
4. `if (l == 4) { console.log("yes"); }`  
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

**19. List all 28 *expressions* in the code above (BONUS!)**
