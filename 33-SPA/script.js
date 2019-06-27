//List of User stories
//As a user, I can add a pokemon
//As a user, I can remove a pokemon

//When <some event happens>, I want to make a <what kind of> fetch, and manipulate the DOM <how?>

//When DOMContentLoaded, I want to make a GET fetch to /pokemon, and display all pokemon
document.addEventListener("DOMContentLoaded", function(){
  //When submit of form, I want to make a POST fetch /pokemon, and add new pokemon to display
  getForm().addEventListener("submit", submitHandler)
  getHeader().addEventListener("click", () => {
    document.body.innerHTML = ""
  })
  gottaFetchEmAll()
});

function submitHandler(event){
  event.preventDefault()
  postPokemon()
}

function postPokemon(){
  console.log("attempting to post a pokemon")
  let data = {
    name: document.querySelector("#name-input").value,
    sprite: document.querySelector("form")[1].value
  }
  fetch('http://localhost:3000/pokemon/', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(newPokemon => {
    renderPokemon(newPokemon)
  })
}

function getHeader(){
    return document.querySelector("#pokemon-logo")
}

function gottaFetchEmAll(){
  fetch('http://localhost:3000/pokemon/')
  .then( response => response.json())
  .then( pokemonArray => {
    // pokemonArray.forEach( pokemon => {  renderPokemon(pokemon) } )
    pokemonArray.forEach( renderPokemon  )
    //do stuff with pokemonArray right here and now
  })
}

function getForm(){
  return document.querySelector("form")
}

function getPokemonContainer(){
  return document.querySelector("#pokemon-container")
}

function renderPokemon(pokemon){
  let pokemonDiv = document.createElement("div")
  pokemonDiv.classList.add("card")
  pokemonDiv.addEventListener("click", deletePokemon)
  pokemonDiv.id = `pokemon-${pokemon.id}`

  let header = document.createElement("h3")
  header.innerHTML = pokemon.name

  let image = document.createElement("img")
  image.src = pokemon.sprite

  pokemonDiv.append(header, image)
  getPokemonContainer().appendChild(pokemonDiv)
}

//When click of a pokemon, I want to make a DELETE fetch, and remove pokemon from display
function deletePokemon(event){
  var id = event.currentTarget.id.split("-")[1]
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(() => {
  })
  .catch(() => {
    alert("Server is down")
  })


  document.querySelector(`#pokemon-${id}`).remove()

}










//
