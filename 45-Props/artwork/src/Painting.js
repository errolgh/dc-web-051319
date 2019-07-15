import React from 'react'

//functional component
const Painting = ({painting: {title, date, image, dimensions:{width, height}} }) => {
  return (
    <div className="ui card">
      <div>
        <img src={image} alt={title} />
        <div>{title}</div>
        <div>{date}</div>
        <div>Width: {width} x Height: {height}</div>
      </div>
    </div>
  )
}

export default Painting
