import React from 'react'

const Searchbar = (props) => {
  return (
    <input onChange={props.changeSearch} placeholder="Search Pokemon" className="search"/>
  )
}

export default Searchbar
