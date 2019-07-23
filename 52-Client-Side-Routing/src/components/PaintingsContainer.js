import React from 'react'
import Painting from './Painting'
import Searchbar from './Searchbar'

const PaintingsContainer = (props) => {
  // debugger
  // let { onSearchHandler, filterTerm, paintings, onSelectPainting } = props;

  let filteredPaintings = props.paintings.filter((painting) => painting.title.includes(props.filterTerm));

  return(
    <div>
    <Searchbar onChangeHandler={props.onSearchHandler} value={props.filterTerm}/>
    {filteredPaintings.map(paintingObj => <Painting
      key={paintingObj.id}
      painting={paintingObj}
      onSelectPainting={props.onSelectPainting}
    />)}
    </div>
  )
}

export default PaintingsContainer;
