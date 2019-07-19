import React from 'react'

const Scouting = (props) => {
  return (
    <div className="card details">
      {
        props.player ? (<div>
          <div className="row">{props.player.species.name}</div>
          <div className="row">
            <div><img alt="" src={props.player.sprites.front_default} />
            </div>
            {props.player.stats.map(stat => <div key={stat.stat.name}>
              {`${stat.stat.name}: ${stat.base_stat}`}
            </div>)}
          </div>
        </div>) : null
      }
    </div>
  )
}

export default Scouting
