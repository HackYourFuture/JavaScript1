# Promises

Listing 1 shows an example based on an asynchronous XMLHttpRequest that we will use throughout this discussion.

```js
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

// alternative:
const fetchJSON = url => fetch(url).then(res => res.json());

...

getJSON(apiEndpoint)
  .then(res => renderData(res))
  .catch(err => renderError(err));
```

Listing 1. Asynchronous `XMLHttpRequest` (and `fetch` alternative) using a promise

The `getJSON()` function in Listing 1 returns a `promise` that resolves to some value converted from JSON data received from some remote API end point. The `fetchJSON()` function does the same, using a more modern browser Web API.

## What is a promise?

Why is a JavaScript ES6 `promise` called a 'promise'? Here is a snippet from the *Oxford Dictionary of English* definition of 'promise':

> **promise** |ˈprɒmɪs|<br>
noun<br>
1 a declaration or assurance that one will do something or that a particular thing will happen

This pretty well sums up what a promise means in JavaScript: something that will be delivered in the future (if and when the promise is *fulfilled*). 

Traditionally, *callbacks* are used as a way to receive the data that is delivered asynchronously (meaning that the data is not likely to be available at the time it is requested but can be expected 'to happen' some time later). Using callbacks can quickly become unwieldy when dealing with many asynchronous events (e.g., ajax calls), especially when they depend on each other (google for *callback hell*).

JavaScript ES6 introduces promises as a better alternative for callbacks when dealing with asynchronous events.

We can state a number of simple facts about ES6 promises:

- A promise is a JavaScript object (`typeof somePromise === 'object'`) that serves as a placeholder for a (future) value.
- Because a promise is an ordinary JavaScript object you can pass it around as an argument to a function, return it from a function, assign it to a variable, push it to an array, etc.
- You can create one yourself by calling the ES6 `Promise` constructor function with `new` (as we're doing in Listing 1 above), then call `resolve` when results are ready or `reject` on detecting an error.
- Sometimes you can get a ready-made promise by calling an appropriate API or library function, like the `fetch` Web API function in Listing 1.
- Internally, a promise can be in one of three states:
   - **pending**: the asynchronous result is still awaiting delivery
   - **fulfilled**: the asynchronous result has been delivered and ready (`resolve` was called)
   - **rejected**: an error was encountered: the promise could not be fulfilled (`reject` was called)
- A promise that is no longer pending because it was either fulfilled to rejected is said to be _settled_.
- A promise that is _settled_ has reached its final state. Its state and value can no longer be changed.

## The .then() method

A promise exposes a `.then()` method through which you can obtain its fulfilled value or an error value in the case the promise was rejected:

```js
somePromise.then(onFulfilled, onRejected)
```

The `.then()` method takes two **optional** callbacks, the first one dealing with the 'happy' scenario (the promise is fulfilled) and the second one dealing with the error case (the promise is rejected). If you are only interested in the success case you can leave out the second callback:

```js
somePromise.then(onFulfilled)
```

If you are only interested in the error case, you can pass `null` for the first callback:

```js
somePromise.then(null, onRejected)
```

or you can use a second method exposed by a promise, which is just a short-hand for calling `then()` with `null` as its first argument:

```js
somePromise.catch(onRejected)
```

> Note: the callback functions passed as arguments to the `.then()` method are always called asynchronously, even if the promise was already settled.

It is also important to understand that the `.then()` method returns a new promise that resolves to the return value of the `onFulfilled` callback (if specified) in case of the 'happy' scenario or the return value of the `onRejected` callback (if specified) in case of an error. If the return value of these functions is a plain JavaScript value, the new promise is immediately fulfilled with that value. If the return value is yet another promise then that promise itself is the fulfillment value. If the function does not return a value, the new promise is immediately fulfilled with the value `undefined`.

Because `.then()` (and `.catch`) return new promises, you can chain them together such that your code can be read as: do *this*, then do *that* and then *that*, etc.:

```js
fetchJSON(apiUrl)
  .then(data => {
    renderData(data);
    return fetchJSON(otherUrl);
  })
  .then(otherData => renderOther(otherData))
  .catch(error => handleError(error));
```

Listing 2. Chaining of `then` and `catch`

More information:

- [MDN - Promise definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ specification](https://promisesaplus.com/)
