import initialState from './state'

let reducer = (oldState=initialState, action) => {
  switch(action.type){
    case "INCREMENT":
      return {count: oldState.count + action.payload}
    case "DECREMENT":
      return {count: oldState.count - action.payload}
    default:
      return oldState
  }
}

export default reducer
