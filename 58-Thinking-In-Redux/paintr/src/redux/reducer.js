import paintingsData from "../paintings.json"
import {combineReducers} from 'redux'

let initialState = {
  paintings: paintingsData.paintings,
  searchText: ""
}

const searchTextReducer = (oldState=initialState.searchText, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH":
      return action.payload
    default:
      return oldState
  }
}

const paintingsReducer = (oldState=initialState.paintings, action) => {
  switch (action.type) {
    case "VOTE_FOR_PAINTING":
      //create a new paintings, same length as the old painting,
      //but with the one painting given another vote
      let newPaintings = oldState.map(p => {
        if(p.id === action.payload){
          return {...p, votes: p.votes + 1}
        }else{
          return p
        }
      })
      return newPaintings
    default:
      return oldState
  }
}

//maps the state : reducer
let rootReducer = combineReducers({
  paintings: paintingsReducer,
  searchText: searchTextReducer
})

export default rootReducer
