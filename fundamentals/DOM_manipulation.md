# Basic DOM manipulations

Using JavaScript we can access and manipulate the Document Object Model (DOM). We access the DOM through a global object called `document`.

HTML
```html
<body>
  <div id="hello"></div>
</body>
```

A common method to access the DOM is by giving a HTML element an ID, and then using the `document` method `getElementById()`

```js
const x = document.getElementById('hello');
```

Now we have stored a *reference* of how that HTML element is accessed through the DOM object. We can use this to manipulate the element.

```js
x.innerHTML = 'hello';
```

We can also create elements
```js
const a = document.createElement('li');
x.appendChild(a);
```
