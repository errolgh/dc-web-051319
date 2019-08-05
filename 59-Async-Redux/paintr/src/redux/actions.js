// action creators
const URL = 'http://localhost:3000/paintings/'

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function voted(paintingId) {
  return { type: "INCREASE_VOTES", paintingId };
}

function updatePainting({ title, name, birthday, deathday, paintingId }) {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday },
    paintingId
  };
}

function fetchedPainting(paintings){
  return {type:"FETCHED_PAINTINGS", payload: paintings}
}

function isLoading(){
  return {type: "LOADING_PAINTINGS"}
}

function fetchingPainting(){
  return (dispatch) => {
    dispatch(isLoading())
    fetch(URL)
    .then(res => res.json())
    .then(paintings => {
      dispatch( fetchedPainting(paintings) )
    })
  }
}
//Problem 1: we need to wait for the fetch to happen before returning action
//Problem 2: we don't have access to dispatch

function voting(paintingId){
  return (dispatch, getState) => {
    let oldVotes = getState().paintings.find(p => p.id === paintingId).votes
    fetch(`${URL}/${paintingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        votes : oldVotes + 1
      })
    }).then(res => {
      dispatch(voted(paintingId))
    })
  }
}

export { changeSearchText, voted, updatePainting, fetchedPainting,
  fetchingPainting, voting };
