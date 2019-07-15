import React from 'react'

//functional component
function Header(props){
  return (
    <div className={`ui inverted ${props.color} menu navbar`}>
        <h2 className="ui header">
          <i className={`${props.icon} icon`}></i>
          <div className="content">{props.title}</div>
          <div className="sub header">{props.subtitle}</div>
        </h2>
    </div>
  )
}

export default Header
