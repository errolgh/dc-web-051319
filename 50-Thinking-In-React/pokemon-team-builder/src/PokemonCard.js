import React from 'react'

const PokemonCard = (props) => {
  return (
    <div
      onClick={()=>{props.cardSingleClick(props.pokemon.url)}}
      onDoubleClick={()=>{props.cardDoubleClick(props.pokemon)}}
      className="pokemon">
      {props.pokemon.name}
    </div>
  )
}

export default PokemonCard
