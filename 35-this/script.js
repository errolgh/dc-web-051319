"use strict"

console.log(this)
//global; this == window

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

function greet(){
  //this is going to be undefined instead of window
  console.log(`${this.firstName} says hi`)

  // const setFullName = () => {
  //   debugger
  //   this.fullName = `${this.firstName} ${this.lastName}`
  // }
  //
  // setFullName()
}

// paul.greet()



//.bind() return a new function that is a copy of the old function
//the value of this is binded

document.querySelector("#paul").addEventListener("click", greet.bind(paul))
document.querySelector("#ann").addEventListener("click", greet.bind(ann))























//
