## Imperative Programming
- Explicitly tell your program every step it needs to execute
- In vanilla JS, find the relevant DOM elements
- Programmatically create, update, or remove DOM elements

## Declarative Programming
- Tells the program 'what' the webpage should be/should look like
- The 'how' is abstracted

## State
- State is similar to props, but it is private and fully managed by the class component (can't be functional)

- Set up the state object using this.state in the constructor
- or outside the constructor
- Don't modify state directly, use this.setState({})
  - works asynchronously

# State is {}
  - designing state
  - keep tracks of data that CHANGES over time
  - keep it as minimal as possible


## Virtual DOM
- When does the DOM get re-rendered? - change in props or a change in state

## Controlled Forms and Event Callback handlers

## Conditional Rendering

## On Your Own
- practice working with other input types (textarea, select, checkbox, radio button)
- https://reactjs.org/docs/forms.html


## Upcoming Lab Review - Animal Lab (Combining It All)
 - When <some event happens>, I want to make a <what kind of> fetch call, and I want to re-render the DOM <by changing state>
 - DO NOT worry about back end persistence
 - IGNORE ALL TEST CASES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
