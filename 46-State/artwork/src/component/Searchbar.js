import React from 'react'

const Searchbar = (props) => {
  return (
    <div>
      <label>Search: </label>
      <input onChange={props.changingText}/>
    </div>
  )
}

export default Searchbar
