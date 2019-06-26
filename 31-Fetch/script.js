// getHttpRequest('https://pokeapi.co/api/v2/pokemon', function(){
//   //some data that is our pokemons
//   //let pokeURL = pokemon.results.find(pokemon's name is bulbasaur).url
//   getHttpRequest(pokeURL, function(){
//     //some data that is our single pokemon
//     //let abilityURL = abilities.find(ability with is_hidden: true).ability.url
//     getHttpRequest(abilityURL, function(){
//       //some data ability obj
//       //effect_entries.effect to get the description
//     })
//   })
// })

//do thing1
//do thing2
//do thing3

//fetch returns a Promise object

document.addEventListener("DOMContentLoaded", ()=>{
  fetchAllAnimals()
  document.querySelector("button").addEventListener("click", fetchAllAnimals)
  document.querySelector(".clear").addEventListener("click", clearContainer)
})

function clearContainer(){
  let container = document.querySelector(".container")
  container.innerHTML = ""
}

function showAnimals(){
  let container = document.querySelector(".container")
  container.classList.toggle('hide')
}

function fetchAllAnimals(){
  let globalAnimals
  fetch("https://animal-farm-api.herokuapp.com/animals")
  .then(response => response.json())
  .then(aminalsArray => {
    globalAnimals = aminalsArray
  	//some DOM manipulation
    aminalsArray.forEach((animal) => {renderAnimalToDom(animal)})
    //for each aminal object, we want to render it to the DOM
  })
}

function renderAnimalToDom(animal){
  let container = document.querySelector(".container")

  let nameElement = document.createElement('h4')
  nameElement.innerText = `${animal.name} is an ${animal.species} from ${animal.farm.name }`

  let imageElement = document.createElement("img")
  imageElement.src = animal.img

  container.appendChild(nameElement)
  container.appendChild(imageElement)
  // debugger
}










//
