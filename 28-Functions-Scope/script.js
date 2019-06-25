// myFunction("hello")
//
//
//
//
//
//
//
// //function declaration
// function myFunction(param){
//   console.log("inside a function", param)
// }
//
// //function expression
// let expression = function (param){
//   console.log("inside func expression", param)
// }
//
// //arrow function
// let arrowFunction = (param) => {
//   console.log("inside arrow func")
// }
//
// function timesTwo(x){
//   return x*2
// }
// const timesTwo = function (x){
//   return x*2
// }
// const timesTwo = x => x*2

// console.log([1, 3, 4].map(x => x*2))
// [1, 3, 4].map({|x| x * 2})





























var x = "Ann"

//Start function definitions
function greetInstructors(){
  greetAnn()
  greetPaul()
}

function greetAnn(){
  console.log("hi ann")
}

function greetPaul(){
  console.log("hi paul")
}
//End function definitions

//Start executable code
// greetInstructors()


//var, let, and const
//var can redeclare and resassign
// var teacher = "Ann"
// var teacher = "Paul"
//
// //let can resassign, cannot redeclare
// let pet = "Dog"
// pet = "Cat"
// pet = "Dolphin"
//
// //const cannot be reassigned OR redeclared
// const icecream = {flavor: "vanilla"}

//not inside the same scope


let teacher = "Joseph"

function aFunction(){
  let teacher = "Jenny"
  anotherFunction()
}

function anotherFunction(){
  console.log("inside another function", teacher)
}

// aFunction()
// console.log("in GLOBAL", teacher)




let array = [4, 5, 6, 7]
//.map takes in as an argument a function

//write iterators with function declaration
var newArray = array.map(   myFunction   )
function myFunction(currentValue){
  return  -1 * currentValue
}

//write with named function expression
var newArray = array.map(   myFunction   )
var myFunction = function(currentValue){
  return  -1 * currentValue
}

//write with annonymous function express
var newArray = array.map(function(currentValue){
  return  -3 * currentValue
})

//write with an in-line arrow function
var newArray = array.map(num => -10*num)


console.log(newArray)



//















//
