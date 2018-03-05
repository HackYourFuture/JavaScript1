# Promises

Listing 1 shows an example based on an asynchronous XMLHttpRequest that we will use throughout this discussion.

```js
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
      if (xhr.status < 400) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => reject(new Error(xhr.statusText));
  });
}

// alternative:
const fetchJSON = url => fetch(url).then(res => res.json());

// ...

getJSON(url)
  .then(data => renderData(data))
  .catch(err => renderError(err));
```

Listing 1. Asynchronous `XMLHttpRequest` (and `fetch` alternative) using a promise.

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
- A promise that is _settled_ has reached its final state. Its state and value can no longer be changed. It has become _immutable_.

## The .then() method

A promise exposes a `.then()` method through which you can obtain its fulfilled value or an error value in the case the promise was rejected:

```js
somePromise.then(onFulfilled, onRejected)
```

The `.then()` method takes as its parameters two **optional** functions, the first one dealing with the 'happy' scenario (the promise is fulfilled) and the second one dealing with the error case (the promise is rejected). If you are only interested in the success case you can leave out the second parameter:

```js
somePromise.then(onFulfilled)
```

If you are only interested in the error case, you can pass `null` for the first callback:

```js
somePromise.then(null, onRejected)
```

or you can use another method available on a promise, `.catch()`, which is just a shorthand for calling `then()` with `null` as its first argument:

```js
somePromise
  .then(onFulfilled)
  .catch(onRejected)
```

> Note that `onFulfilled` and `onRejected` execute asynchronously, after the [event loop](./event_loop.md) turn in which then is called, and with a fresh stack.

It is also important to understand that the `.then()` method returns a new promise that resolves to the return value of `onFulfilled` (if specified) in case of the 'happy' scenario or the return value of `onRejected` (if specified) in case of an error. If the return value of these functions is a plain JavaScript value, the new promise is immediately fulfilled with that value. If the return value is yet another promise then the outcome is determined by the inner promise, once settled. If the function does not return a value, the new promise is immediately fulfilled with the value `undefined`.

Because `.then()` (and `.catch`) return new promises, you can chain them together such that your code can be read as: do *this*, then do *that* and then *that*, etc.:

```js
getJSON(url)
  .then(data => {
    const innerPromise = getJSON(otherUrl)
       .then(otherData => {
          renderData(data);
          renderOtherData(otherData);
       });
    return innerPromise;
  })
  .catch(err => {
    renderError(error)
  });
```

Listing 2. Chaining of `then` and `catch`

Let's examine Listing 2 in a bit more detail. There two calls to `getJSON()`. Errors are to be handled in one place, by means of the `.catch()` method that terminates the promise "chain".

If you embed another promise inside the function that you pass to the `.then()` method you should return that promise as the function's return value. If you don't return the promise, there is no way for the `.catch()` at the end of the chain to "see" a `reject()` of the inner promise, leaving the rejection unhandled.

Note the expression assigned to the `innerPromise` variable. The `getJSON()` function returns a promise, but the `.then()` method chained to `getJSON()` also returns a promise (resolved to the value `undefined` because no value is returned). Therefore `innerPromise` is indeed a promise. In this case we are not interested in the value it resolves to (which is `undefined` as we saw), only in the fact that the promise is resolved (i.e. the async operation we were waiting for has been completed).

In case a promise in the chain is rejected due to some error, the promise chain will be traversed until an `onRejected` handler (e.g., in a terminating `.catch()` method) is found. All intermediate `onFulfilled` handlers (e.g. `.then()`) will be skipped*.

Handling errors at the end of a promise chain is a major advantage over the repetition of error handling code in the case of callbacks.

Note however that a `.catch()` method does not necessarily have to be the last method in the chain. It can be used to handle errors midway. As mentioned previously, the `.catch()` method returns a new promise which can be used to provide some "fallback" value in case of errors.

In the example below a promise is created that (for the purpose of demonstration) is immediately rejected. The promise is subsequently "consumed" twice.

1. In the first case ('consumer 1'), the rejection is caught by a `.catch()` method and the rejection value `'bad'` is printed on the console.

2. In the second case ('consumer 2'), the rejection is also caught by a `.catch()` method, but now the catch handler completely ignores the rejection value and just returns the fallback value `'good.`. This becomes the fulfillment value of the promise returned by `.catch()`. The next `.then()` in the chain, completely oblivious that an error ever occurred, now prints the fulfillment value `'good'` on the console.
 
```js
const promise = new Promise((resolve, reject) => {
  reject('bad');
});

// consumer 1
promise
  .catch(console.log); // -> "bad"

// consumer 2
promise
  .catch(() => 'good')
  .then(console.log); // -> "good"
```

\* The syntax `.catch(onRejected)` is a shorthand for `.then(null, onRejected)`.

## Further readings

Our previous students also enjoyed learning about promises at:

In text:

- http://javascript.info/promise-basics
- https://blog.cloudboost.io/explaining-basic-javascript-promises-in-jip-en-janneketaal-c98763c0abd6
- https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

Video: The net Ninja: https://www.youtube.com/watch?v=yswb4SkDoj0

MDN:

- [MDN - Promise definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ specification](https://promisesaplus.com/)
