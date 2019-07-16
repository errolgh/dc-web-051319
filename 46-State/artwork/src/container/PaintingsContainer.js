import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsArray from '../data/paintings'

class PaintingsContainer extends Component{

  getFilteredPaintings(){
    return paintingsArray.filter(p => p.title.toLowerCase().includes(this.props.sT.toLowerCase()))
  }

  showList(){
    return(
      <div>
        {this.getFilteredPaintings().map(painting =>
          (<Painting
            key={painting.id}
            painting={painting}
          />)
        )}
      </div>
    )
  }

  render(){
    return this.props.show ? this.showList() : null
  }
}

export default PaintingsContainer
