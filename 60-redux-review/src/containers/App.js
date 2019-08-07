import React from 'react';
import '../css/App.css';
import { connect } from 'react-redux'



function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>{props.connected}</h1>
    </div>
  );
}

const mSTP = (state) =>{
  return { connected: state.connected}
}

export default connect(mSTP)(App);
