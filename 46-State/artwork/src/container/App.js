import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Navbar from '../component/Navbar'
import Searchbar from '../component/Searchbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchText: "",
      show: true
    }
  }

  changeSearchText = (event) => {
    let newSearchText = event.target.value
    this.setState( {searchText: newSearchText} )
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div className="App">
        <Navbar
          title="Paintr"
          tagline="List of Paintings"
          icon="bath"
          color="pink"
        />
        <button onClick={this.toggleShow}>Show/Hide Paintings</button>
        <Searchbar
          changingText={this.changeSearchText}
        />
        <PaintingsContainer
          sT={this.state.searchText}
          show={this.state.show}
        />
      </div>
    );
  }
}

export default App;
