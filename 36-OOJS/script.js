//ES5 way of writing classes
// Instructor.all = []
// Instructor.sendOnVacation = function(){
//   Instructor.all.forEach(i => i.goHome())
// }
//
// function Instructor(instructor){
//   //this is a brand new {}
//   this.firstName = instructor.firstName
//   this.lastName = instructor.lastName
//   Instructor.all.push(this)
// }
//
// Instructor.prototype.greet = function(){
//   console.log(`${this.firstName} say hi`)
// }
//
// Instructor.prototype.goHome = function(){
//   console.log(`${this.firstName} is leaving`)
// }
//
// let paul = new Instructor({firstName:"Paul", lastName:"Nicholsen"})
//         {}.Instructor
//new is creating an {},
//invoked Instructor
//with this set to {}

//ES6 way of writing classes
class Person{
    constructor(i){
      this.firstName = i.firstName
      this.lastName = i.lastName
      this.job = i.job
    }
    greet(){
      console.log(`${this.firstName} says hi`)
    }
}

class Instructor extends Person{
  static all = []
  constructor(inst){
    super(inst)
    this.job = "Instructor at Flatiron"
    Instructor.all.push(this)
  }

  goHome(){
    console.log(`${this.firstName} is leaving`)
  }

  greet(){
    debugger
    super.greet()
    console.log(`welcome to class`)
  }

  static sendOnVacation(){
    Instructor.all.forEach(i => i.goHome())
  }
}


let paul = new Instructor({firstName: "Paul", lastName:"Nicholsen", job:"firefighter"})
let ann = new Instructor({firstName:"Ann", lastName:"Duong"})
let jane = new Person({firstName:"Jane", lastName:"Doe", job:"firefighter"})





















//
