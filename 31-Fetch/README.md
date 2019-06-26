## AJAX, Promises, and Fetch (Communicating with APIs)
- What is AJAX? Async JavaScript and XML
- What is blocking (sync) vs non-blocking code (async)?


### How do we handle async code?
- For example, event listeners
.addEventListener("click", callback)
.setTimeout( callback, 1000)

### What if you have multiple async code that depend on each other?
- https://pokeapi.co/api/v2/pokemon/
- Given the name of the Pokemon, I want to find out the effect/description of its hidden ability

### Callback Hell
- Nested callbacks within nested callbacks
- Triangle shape
- Really hard to read and manage

### Welcome Fetch
- Built in web api
- Get JSON data
- Returns a promise object
- Practice with:  https://animal-farm-api.herokuapp.com/animals

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage


fetch(url)
.then(response => response.json())
.then(data => {
	//do stuff with data inside this scope if you can help it
})

//getting data form an APIs
fetch(url)
then, when I get the response, turn it into a json
then, when I get the data, do something with that data

### Announcement:
- More on Async and the Event Loop: https://www.youtube.com/watch?v=8aGhZQkoFbQ
- FSP check in tomorrow
- Dog CEO Pairing Lab now
