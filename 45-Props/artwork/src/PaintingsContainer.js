import React from 'react'
import Painting from './Painting'
import paintingsData from './data/paintings'
//class component

export default class PaintingsContainer extends React.Component {

  render(){
    console.log(paintingsData)
    return (
      <div>
        <div>I am the paintings container</div>
        {
          paintingsData.map(paintingObj => (
            <Painting painting={paintingObj} key={paintingObj.id}/>
          ))
        }
      </div>
    )
  }
}

// [
//   <Painting painting={paintingsData[0]}/>,
//   <Painting painting={paintingsData[1]}/>,
//   <Painting painting={paintingsData[2]}/>,
//   <Painting painting={paintingsData[3]}/>,
// ]
