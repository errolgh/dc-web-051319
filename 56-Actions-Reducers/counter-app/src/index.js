import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

let initialState = {
  count: 24
}

//1. let's create the store AND reducer at the same time
//We also set up initialState
let reducer = (oldState=initialState, action) => {
  console.log("oldState:", oldState, "action: ", action)
  switch(action.type){
    case "INCREMENT":
      return {count: oldState.count + action.payload}
    case "DECREMENT":
      return {count: oldState.count - action.payload}
    default:
      return oldState
  }
}

let store = createStore(reducer) //where we create the store
console.log(store.getState())

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  increment = (num) => {
    store.dispatch(  { type: "INCREMENT", payload: num }  )
  };

  decrement = (num) => {
    store.dispatch(  { type: "DECREMENT", payload: num }  )
  };

  render() {
    return (
      <header className="App-header">

        <button onClick={()=>this.decrement(5)}> -5 </button>
        <button onClick={()=>this.decrement(1)}> - </button>
        <button onClick={()=>this.increment(1)}> + </button>
        <button onClick={()=>this.increment(3)}> +3 </button>
        <h1>{store.getState().count}</h1>

      </header>
    );
  }
}

class Counter extends Component {

    renderDescription = () => {
      const remainder = store.getState().count % 5;
      const upToNext = 5 - remainder;
      return `The current count is less than ${store.getState().count + upToNext}`;
    };

  render() {
    return (
      <div className="Counter">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
