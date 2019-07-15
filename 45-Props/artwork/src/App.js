import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import PaintingsContainer from './PaintingsContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header
          color="pink"
          title="Painters"
          subtitle="all the painters"
          icon="bath"
        />
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
