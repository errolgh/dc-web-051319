import React from 'react'
import {Link} from "react-router-dom"
const PaintingDetails = (props) => {

  // debugger
  return props.painting ?
    <div className="ui card">
      <div>
        <img src={props.painting.image} alt={props.painting.title}/>
        <h3>
          {props.painting.title}
        </h3>
        <div>{`Artist: ${props.painting.artist.name}`}</div>
        <div>{`Born: ${props.painting.artist.birthday}`}</div>
        <div>{`Died: ${props.painting.artist.deathday}`}</div>
        <div>{`Date: ${props.painting.date}`}</div>
        <div>
          {`Dimensions: ${props.painting.dimensions.width} in. x ${props.painting.dimensions.height} in.`}
        </div>
      </div>
      <Link to="/paintings"><button>To Gallery</button></Link>
    </div>
    :
    null
}

export default PaintingDetails
