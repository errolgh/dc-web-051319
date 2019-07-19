import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonContainer = (props) => {
  return (
    <div>
      {props.pokemons.map(pokemonObj => <PokemonCard
          pokemon={pokemonObj}
          key={pokemonObj.name}
          cardDoubleClick={props.cardDoubleClick}
          cardSingleClick={props.cardSingleClick}
        />)}
    </div>
  )
}

export default PokemonContainer
