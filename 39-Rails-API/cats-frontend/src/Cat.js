class Cat {
  static all = []
  constructor(cat){
    this.id = cat.attributes.id
    this.name = cat.attributes.name
    this.breed = cat.attributes.breed
    this.image = cat.attributes.image
    this.hobbies = cat.attributes.hobbies
    Cat.all.push(this)
  }

  renderCatCard(){
    let catDiv = document.createElement("div")
    catDiv.id = `cat-card-${this.id}`
    catDiv.classList.add("four", "wide", "column")
    catDiv.innerHTML = `
    <div class="ui card">
      <div class="image">
        <img src="${this.image}">
      </div>
      <div class="content" id="cat-content-${this.id}">
        <p>${this.name} (${this.breed})</p>
      </div>
    </div>
    `
    document.querySelector('#cats').appendChild(catDiv)
    this.renderHobbies()
    // this.renderForm()
  }

  static fetchCats(){
    fetch('http://localhost:3000/cats')
    .then(res => res.json())
    .then(jsonData => {
      jsonData.data.forEach(cat => {
        let catInstance = new Cat(cat)
        catInstance.renderCatCard()
      })
    })
  }

  renderHobbies(){
    let ul = document.createElement('ul')
    ul.id = `cat-hobbies-${this.id}`
    document.querySelector(`#cat-content-${this.id}`).appendChild(ul)

    this.hobbies.forEach(hobby => {
      let li = document.createElement("li")
      li.innerText = `${hobby.name}`
      ul.append(li)
    })
  }

  static createCat(e){
    e.preventDefault()
    let data = {
      name: e.target[0].value,
      image: e.target[1].value,
      breed: e.target[2].value
    }
    fetch('http://localhost:3000/cats', {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      let catInstance = new Cat(data)
      catInstance.renderCatCard()
    })
  }

  // renderForm(){
  //   let select = document.createElement("select")
  //   // Hobby.all.forEach(hobby => {
  //   //   select.innerHTML += `
  //   //     <option value="${hobby.id}">${hobby.name}</option>
  //   //   `
  //   // })
  //   let button = document.createElement("button")
  //   button.innerText = "Add Hobby"
  //   document.querySelector(`#cat-content-${this.id}`).append(select, button)
  // }
}
