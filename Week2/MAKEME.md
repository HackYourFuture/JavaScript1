## Assignment week 2

1. 
Create a function that takes two objects as parameters and compares them. You will actually need to write two functions - one that compares with == and one that compares with ===. Remember that objects can have objects inside of them so you'll need to find a way to compare every element of every object (types and values). For example: 

```
var obj1 = {
    a: 1, 
    b: 'this is the letter b', 
    c: { foo: 'what is a foo anyway', 
         bar: [1,2,3,4]
    }
}

var obj2 = {
    a: '1', 
    b: 'this is the letter b', 
    c: { foo: 'what is a foo anyway', 
         bar: [1,2,3,4]
    }
}
```

in our example we'll say that obj1 == obj2 is true and obj1 === obj2 is false. Make sure you can see why before you write any code!

2.
We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it. 

```
function foo(func) {
    // What to do here? 
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);
```


Write some code to test two arrays for equality using == and ===. Test the following:
var x = [1,2,3];
var y = [1,2,3];
var z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
Don't cheat! Seriously - try it first. 
http://jsfiddle.net/jimschubert/85M4z/
http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript

3.
https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator

4.
https://www.freecodecamp.com/challenges/record-collection

5.
https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map

6.
We did the following example in class: 

```
 var o1 = { foo: 'bar' };
 var o2 = { foo: 'bar' };
 var o3 = o2;
```
Show that changing o2 changes o3 (or not) and changing o2 changes o3 (or not). 

Does the order that you assign (o3 = o2 or o2 = o3) matter? 

-------------------------------------
### Some further reading: 
Have a look at https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
 
'Coerce' means to try to change - so coercing `var x = '6'` to number means  means trying to change the type to number temporarily. 
