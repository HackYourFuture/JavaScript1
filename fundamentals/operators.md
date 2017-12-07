# Operators

## Comparison operators

>Note the two different uses of the equals sign:
A single equals sign (=) is used to assign a value to a variable.
A triple equals sign (===) is used to compare two values (see Equality Operators).

### Equality operators

* Equality `==`
* Inequality `!=`
* Identity / strict equality `===` (preferred)
* Non-identity / strict inequality `!==` (preferred)

How does this work in practice?

```js
1 == 1 // -> true
7 == '7' // -> true
1 != 2  // -> true
5 === 5  // -> true
9 === '9'  // -> false
3 !== 3 // -> false
3 !== '3' // -> true
```

> why does `7 == '7'` returns true and `9 === '9'` returns false?

We strongly recommend that you always use the strict form when comparing for equality (`===`) or inequality (`!==`). Use the non-strict forms only when there is a compelling reason to do so (you will be hard pressed to find such a reason).

### Relational operators

* Greater than operator `>`
* Greater than or equal operator `>=`
* Less than operator `<`
* Less than or equal operator `<=`

```js
4 > 3   // -> true
3 >= 3  // -> true
13 < 12 // -> false
3 <= 4   // -> true
```

More about [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

## Arithmetic operators

* Addition `+`
* Subtraction `-`
* Multiplication `*`
* Division `/`
* Remainder (sometimes called modulo) `%`
<br>Returns the remainder left over after you've shared the left number out into a number of integer portions equal to the right number.

```js
8 + 9 // -> 17, adds two numbers together.
20 - 12 // -> 8, subtracts the right number from the left.
3 * 4 // -> 12, multiplies two numbers together.
10 / 5 // -> 2, divides the left number by the right.
8 % 3 /// -> 2, as three goes into 8 twice, leaving 2 left over.
```

More about [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#.25_.28Modulus.29)

## Logical operators

* AND `&&`
* OR `||`

```js
true && false //-> false
false && true //-> false
false || true //-> true
true || false //-> true
```

Given that x = 6 and y = 3
```js
x < 10 && y > 1 // -> true
x === 5 || y === 5 // -> false
x !== y // -> true
```

Logical NOT

* NOT `!`

```js
true === !false
false === !true
```

More about [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

### typeof operator

To get the type of a value assigned to a variable, use the following code:

```js
let bar = 42; 
typeof bar    //-> 'number' 
typeof typeof bar; //->  'string'
```

So the data type of what `typeof` returns is always a string, bar on the other hand is still a number.

## Assignment operators

In addition to the simple assignment operator `=` there are also compound assignment operators such as `+=`. The following two assignments are equivalent:

```js
x += 1;
x = x + 1;
```

|Operator|  Example| Same As|
|:------:|:--------:|:-------:|
|`=` |  `x = y` |  `x = y`|
|`+=`|  `x += y` |  `x = x + y`|
|`-=`|  `x -= y` |  `x = x - y`|
|`*=`|  `x *= y` |  `x = x * y`|
|`/=`|  `x /= y` |  `x = x / y`|
|`%=`|  `x %= y` |  `x = x % y`|
