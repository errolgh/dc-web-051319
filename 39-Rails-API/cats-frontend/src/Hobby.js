class Hobby {
  static all = []
  constructor(hobby){
    this.id = hobby.id
    this.name = hobby.name
    this.description = hobby.description
    this.materials = hobby.materials
    Hobby.all.push(this)
  }

  static fetchHobbies(){
    fetch('http://localhost:3000/hobbies')
    .then(res => res.json())
    .then(hobbiesArray => {
      hobbiesArray.forEach(hobby => {
        let hobbyInstance = new Hobby(hobby)
        hobbyInstance.render()
      })
    })
  }

  render(){
    let container = document.querySelector(`#hobbies`)
    let li = document.createElement("li")
    li.innerHTML = `<b>${this.name}</b>: ${this.description} (${this.materials})`
    container.append(li)
  }

}
