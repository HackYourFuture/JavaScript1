# Object-Oriented Programming & Classes

### Object literals and Imperative Programming

In earlier JavaScript lectures we saw that we can define object literals and use functions to access and manipulate their properties. A typical example is shown below, where have defined an array of objects, in this case each representing the name of a month and its associated number of days.

We're looping through the month and printing a message to the console for each month with 31 days.

This style of programming is called Imperative Programming: we instruct the computer how to perform the task(s) at hand.

```js
const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 }
];

for (const month of months) {
  if (month.days === 31) {
    console.log(`${month.name} has ${month.days} days.`);
  }
}
```

## Functional Programming

In the Functional Programming style (also referred to as Declarative Programming), we prefer to declare what the computer should do.

In the next example we have used the `filter` method to extract a subset of months with 31 days, used the `map` method to create an informational string about each month and a `forEach` method to output those strings to the console.

Put in other words, we state or declare that the computer should **filter** our array according to some defined criterion, then it should **map** the filtered object to string and print out each string to the console. In contrast to the imperative style we do not have to infer from looking at the code what we are actually doing. Instead, the names of out functions and methods already imply what it is we want to achieve.

```js
const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 }
];

months
  .filter(month => month.days === 31)
  .map(month => `${month.name} has ${month.days} days.`)
  .forEach(string => console.log(string));
```

### ES6 Classes and Object-Oriented Programming

The remaining style of programming we will discuss here is called Object-Oriented Programming. 

TO BE CONTINUED

```js
class Month {
  constructor(name, days) {
    this.name = name;
    this.days = days;
  }

  hasDays(days) {
    return this.days === days;
  }

  isLongMonth() {
    return this.hasDays(31);
  }

  toString() {
    return `${this.name} has ${this.days} days.`;
  }

  toConsole() {
    console.log(this.toString());
  }
}

const months = [
  new Month('January', 31),
  new Month('February', 28),
  new Month('March', 31),
  new Month('April', 30),
  new Month('May', 31),
  new Month('June', 30),
  new Month('July', 31),
  new Month('August', 31),
  new Month('September', 30),
  new Month('October', 31),
  new Month('November', 30),
  new Month('December', 31)
];

months
  .filter(month => month.isLongMonth())
  .forEach(month => month.toConsole());
```

### The prototype chain

![prototype](assets/prototype.png)

### Pre-ES6 constructor functions and prototypes

```js
function Month(name, days) {
  this.name = name;
  this.days = days;
}

Month.prototype.hasDays = function (days) {
  return this.days === days;
};

Month.prototype.isLongMonth = function () {
  return this.hasDays(31);
};

Month.prototype.toString = function () {
  return `${this.name} has ${this.days} days.`;
};

Month.prototype.toConsole = function () {
  console.log(this.toString());
}

const months = [
  new Month('January', 31),
  new Month('February', 28),
  new Month('March', 31),
  new Month('April', 30),
  new Month('May', 31),
  new Month('June', 30),
  new Month('July', 31),
  new Month('August', 31),
  new Month('September', 30),
  new Month('October', 31),
  new Month('November', 30),
  new Month('December', 31)
];

months
  .filter(month => month.isLongMonth())
  .forEach(month => month.toConsole());
```

### Bonus: Array.prototype.map & Array.prototype.filter implementations

```js
Array.prototype.myMap = function (mapFn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(mapFn(this[i], i, this));
  }
  return arr;
};
```


```js
Array.prototype.myFilter = function (predicateFn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (predicateFn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
```