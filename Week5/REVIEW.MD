# REVIEW week 5

```
this review covers:
• Git Session
• Events
• Callbacks
• XHTTP Requests
• API calls
```

## Callbacks

- JavaScript callback functions tutorial: https://www.youtube.com/watch?v=pTbSfCT42_M&index=17&list=WL

## XMLHTtpRequest
**XMLHttpRequest** is an objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. XMLHttpRequest is used heavily in Ajax programming. - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

So what is Ajax?
**Ajax** is a method of exchanging data with a server, and updating parts of a web page without reloading the entire page.

Let's diving a bit deeply into the code:

First, we need to make an instance from 'XMLHttpRequest' class.
```javascript
var http = new XMLHttpRequest();
```
When we are doing a request it goes through 5 states:
* 0 : request not initialized.
* 1 : request has been set up.
* 2 : request has been sent.
* 3 : request is in process.
* 4 : request is complete.

In the code below we are checking if the request is complete or not, and we check the status == 200 just to make sure that we do not get 404 error. - Take a look about [HTTP Status Code](https://httpstatuses.com).
```javascript
 http.onreadystatechange = function() {
        if ( http.readyState == 4 && http.status == 200) {
             console.log(`Response from the server: ${http.response}`); 
     }
}
```
There are methods to deal with a server like (GET, POST, UPDATE, DELETE…)

* GET: to retrieve data from server.
* POST: to send data to server.
* UPDATE: to update data on the server.
* DELETE: to delete date from the server.

To Initialize a request we use [open][https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open] method. The syntax is:
```javascript
XMLHttpRequest.open(method, url, async, user, password)
```
The parameters 'method' and 'url' are mandatory, 'user' and 'password' are optional. True is a default value for 'async'.

```javascript
http.open("GET", URL, true/false);
```
At the end we have to send our request to the server through [send](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send) method. In our situation we are retriving a data from the server, so we do not have to pass any parameter to the send request.

```javascript
http.send()
```
