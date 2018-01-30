# Object-Oriented Programming & Classes

### Object literals and Functional Programming
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

const isLongMonth = month => month.days === 31;
const toString = month => month.name + ' has ' + month.days + ' days.';

const longMonths = months.filter(isLongMonth);
const strings = longMonths.map(toString);
strings.forEach(string => console.log(string));
```

### ES6 Classes and Object-Oriented Programming

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

const longMonths = months.filter(month => month.isLongMonth());
longMonths.forEach(month => console.log(month.toString()));
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

const longMonths = months.filter(month => month.isLongMonth());
longMonths.forEach(month => console.log(month.toString()));
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