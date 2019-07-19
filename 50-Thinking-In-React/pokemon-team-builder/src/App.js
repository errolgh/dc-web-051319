import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import PokemonContainer from './PokemonContainer'
import Scouting from './Scouting'
import Searchbar from './Searchbar'

class App extends Component {
  state = {
      team: [],
      allPokemon: [],
      scoutedPokemon: null,
      searchText: ""
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(res => res.json())
    .then(pokeObj => {
      this.setState({allPokemon: pokeObj.results})
    })
  }

  changeScoutedPokemon = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(pokeData => {
      this.setState({scoutedPokemon: pokeData})
    })
  }

  addPokemonToTeam = (pokemon) => {
    if(this.state.team.length < 6 && !this.state.team.includes(pokemon)){
      this.setState({team: [...this.state.team, pokemon]})
    }else{
      alert("Can't add pokemon")
    }
  }

  removePokemonFromTeam = (pokemon) => {
    this.setState({
      team: this.state.team.filter(p => p !== pokemon)
    })
  }

  changeSearch = (event) => {
    this.setState({searchText: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Header />

        <h3>Team:</h3>
        <PokemonContainer
          pokemons={this.state.team}
          cardDoubleClick={this.removePokemonFromTeam}
          cardSingleClick={this.changeScoutedPokemon}
        />

        <h3>Scouting Pokemon:</h3>
        <Scouting
          player={this.state.scoutedPokemon}
        />
        <Searchbar
          changeSearch={this.changeSearch}
        />

        <h3>All Pokemon:</h3>
        <PokemonContainer
          pokemons={this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchText))}
          cardDoubleClick={this.addPokemonToTeam}
          cardSingleClick={this.changeScoutedPokemon}
        />
      </div>
    );
  }
}

export default App;
