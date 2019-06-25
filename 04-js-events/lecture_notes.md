# Synchronous vs Asynchronous code
    - So far been all synch code.  One line at a time in order
        - show with a few console.log statements
    - async:  `setTimeout(function(){console.log('hi one second later', 1000)`
```js
console.log("first line")
setTimeout(function(){console.log('hi one second later', 1000)
console.log("hello from bottom of the file")
```
    - change delay to 0 and setTimeout is still last.  

    - Execution stack:  
        - Invoking a function pushes a frame onto the stack
        - Asynch callbacks get passed to a separate space known as the event loop that does not execute until entire stack is empty

# Events
    - click, hover
    - keydown, keyup
    - DOMContentLoaded

`document.addEventListener("DOMContentLoaded" function() {console.log('loaded')})`

- put a debugger before the above line to show that nothing loads
```js
document.addEventListener("click", clickHandler)

function clickHandler() {
    console.log("You clicked")
}
```

- callback functions can take optional event (doesn't have to be "event"):

```js
document.addEventListener("click", clickHandler)

function clickHandler(event) {
    console.log("You clicked: ", event)
}
```

- Event listeners generally get added on load of page or creation of element.

- Task:
```
- When click of email -> console.log("send an email")
- When click of submit -> add new instructor
- When click of row -> console.log("view profile")
```

## Email

- First build emailClickHandler to be generic; then explain concept of event; show in console.log.  Explain target.
```js
document.addEventListener("DOMContentLoaded", function(){
  let emailElements = document.querySelectorAll(".email")
  emailElements.forEach((emailElement)=>{
    emailElement.addEventListener("click", emailClickHandler)
  })


function emailClickHandler(e){
    console.log("Sending an email to " + e.target.innerText)
}
```

## Submit

- add event listener to form (DOM ContentLoaded) with console log on submit
`  let form = document.querySelector("form")
  form.addEventListener("submit", handleSubmit)`

- show what happens without `event.preventDefault`

```js
function handleSubmit(event){
  event.preventDefault()

  let firstName = document.getElementById("firstNameInput").value
  let lastName = document.getElementById("lastNameInput").value
  let email = document.getElementById("emailInput").value

  addNewRow(firstName, lastName, email)
}
```

- show that this destroys the event listeners because of using `innerHTML`.  Also since innerHTML rewrites so much of the DOM it will be slower.  Try to manipulate the DOM as little as possible

- new email row won't have a click handler.  
`  emailElement.addEventListener("click", emailClickHandler)`

## View Profile

```js
  // in DOMContentLoaded

  let rowElements = document.querySelectorAll(".person")
  rowElements.forEach((node) => {
    node.addEventListener("click", profileClickHandler)
  }) // add this to addRow code


  def profileClickHandler() {
    // show
    console.log("Profile: ", event.target)
  }
```

- show that event.target shows what triggered the event; in this case it will show an individual cell instead of the whole row.  `event.currentTarget` will show the node the listener is attached to

- if you click on an email, it will show both the profile and the event.  

- Every time an event happens, there are two phases.  

  - *The capture phase* starts from the root and goes down to the node.  A click on a td actually is a click on the document, the HTML, the body, the table, the row, the cell.

  - *The bubbling phase* starts from the node and looks for listeners, firing events in order up to the root

  - To prevent this, add `event.stopPropagation` and the bubbling phase will stop
  
  - To reverse this (look in docs), show that `useCapture` is the optional third argument (boolean) in the addEventListener
```js
document.addEventListener("DOMContentLoaded", function(){
  let emailElements = document.querySelectorAll(".email")
  emailElements.forEach((emailElement)=>{
    emailElement.addEventListener("click", emailClickHandler)
  })

  let form = document.querySelector("form")
  form.addEventListener("submit", handleSubmit)
})

function handleSubmit(event){
  event.preventDefault()

  let firstName = document.getElementById("firstNameInput").value
  let lastName = document.getElementById("lastNameInput").value
  let email = document.getElementById("emailInput").value
  event.target.reset()

  addNewRow(firstName, lastName, email)
}

function emailClickHandler(e){
    console.log("Sending an email to " + e.target.innerText)
}

function addNewRow(firstName, lastName, email){

  var trElement = document.createElement('tr')

  //find the tBody, give it a variable name,
  let tBodyElement = document.querySelector('tbody')
  tBodyElement.appendChild(trElement)

  let firstNameElement = document.createElement('td')
  let lastNameElement = document.createElement('td')
  let emailElement = document.createElement('td')
  emailElement.addEventListener("click", emailClickHandler)

  firstNameElement.innerText = firstName
  lastNameElement.innerText = lastName
  emailElement.innerText = email
  trElement.append(firstNameElement, lastNameElement, emailElement)
}
```