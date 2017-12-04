# REVIEW week 5

```
this review covers:
• Events
• Callbacks
• XHTTP Requests
• API calls
```

## Callbacks

- JavaScript callback functions tutorial: https://www.youtube.com/watch?v=pTbSfCT42_M&index=17&list=WL

## XMLHttpRequest
**XMLHttpRequest** is an object to interact with servers. You can retrieve data from a URL without having to do a full page refresh. XMLHttpRequest is used heavily in Ajax programming - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

So what is Ajax?
**Ajax** is a method of exchanging data with a server, and updating parts of a web page without reloading the entire page.

Let's dive into the code:

First, we need to make an instance from 'XMLHttpRequest' object.
```js
var http = new XMLHttpRequest();
```
When we are doing a request it goes through 5 states:
* 0 : request is not initialized.
* 1 : request has been set up.
* 2 : request has been sent.
* 3 : request is in process.
* 4 : request is complete.

In the code below we are checking if the request is complete or not, and we check the status == 200 just to make sure that we do not get a 404 error - Read more about it here: [HTTP Status Code](https://httpstatuses.com).
```js
 http.onreadystatechange = function() {
        if ( http.readyState == 4 && http.status == 200) {
             console.log('Response from the server: ' + http.response); 
     }
}
```
There are methods to deal with a server like (GET, POST, UPDATE, DELETE…)

* GET: retrieve data from server.
* POST: send data to server.
* UPDATE: update data on the server.
* DELETE: delete date from the server.

To initialize a request we use [open](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open) method. The syntax is:
```js
XMLHttpRequest.open(method, url, async, user, password);
```
The parameters _method_ and _url_ are mandatory, _user_ and _password_ are optional. True is a default value for _async_.

```js
http.open("GET", URL, true/false);
```
At the end we have to send our request to the server through [send](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send) method. In our situation we are retrieving a data from the server, so we do not have to pass a parameter to the send request.

```js
http.send();
```
