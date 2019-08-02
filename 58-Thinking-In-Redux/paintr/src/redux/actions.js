//write functions and create and return action objects for us

function changeSearch(event){
  return {type:"CHANGE_SEARCH", payload: event.target.value}
}

function voteForPainting(paintingId){
  return {type:"VOTE_FOR_PAINTING", payload: paintingId}
}

export {changeSearch, voteForPainting}
