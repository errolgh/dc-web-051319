- show how to open files in browser
- show html and js file

# What is the DOM?

- Document Object Model
- it is not HTML, although it looks like it
- Show inspect
    - Console
    - Elements
        - This shows the DOM

- Browser reads HTML file to create the DOM.  However, HTML is static while the DOM is dynamic

- DOM is made up of different nodes/elements, which are more or less synonymous

- Draw out tree structure.  Introduce parent, child and sibling nodes.

## Traversing the tree
- `document`
- `document.children`
- `document.children[0].children`
- `parentElement`

- Show inspecting a single element and talk about how to target it.  Query selector grabs the first
- `document.querySelector(".js-tweet-text").innerText = "I love Netflix"`

- save an element as a variable 
- `document.getElementById("timeline")` can be further queried

- select all p elements:  `document.querySelectorAll(".js-tweet-text").`  Returns *nodeList* which is more or less an array.  supports `forEach`
    - `tweetList.forEach((tweetNode) => {tweetNode.innerText = "I heart stuff"})`

- Show some of the other selector methods from ReadMe.  NodeList vs HTML collection; latter does not support `forEach`.  Can use `Array.from(html_collection)` to use for Each

- `let title = document.querySelector("h1.ProfileHeaderCard-name")`
- `title.style.background = "pink"`
- `title.classList.remove(className)`.  Add/Remove/Toggle

## Activity

- Students should go to Wiki page for DOM and use JS to make it a page of their choosing (use console, not directly altering through inspect)

- `innerText` vs `innerHTML`
    `title.innerText = "<h2>Hollywood Video</h2>"`
    `title.innerHTML = "<h2>Hollywood Video</h2>"`

## index.html && script.js

- put `console.log(document.querySelector('tbody'))` in script.js and show that it logs out `null` to the console.  This is because the body has not been loaded yet when script.js is loaded in the head

- `document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('tbody')
})`

- build `function addInstructor(firstName, lastName, email) {}`.  How does the DOM need to change?

```js
function addInstructor(firstName, lastName, email) {
    let tbody = document.querySelector('tbody')
    let tr = document.createElement("tr")
    let newID = tbody.children.length + 1
    tr.id = `row-${newID}`

    let firstNameEl = document.createElement("td")
    firstNameEl.classList.add("firstName")
    firstNameEl.innerText = firstName
    tr.appendChild(firstNameEl)

    let lastNameEl = document.createElement("td")
    lastNameEl.classList.add("lastName")
    lastNameEl.innerText = lastName
    tr.appendChild(lastNameEl)

    let emailEl = document.createElement("td")
    emailEl.classList.add("email")
    emailEl.innerText = email
    tr.appendChild(emailEl)



    tbody.appendChild(tr)

}
```