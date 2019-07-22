import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:4000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushi: [],
      currentSushi: [],
      index: 0,
      eatenSushi: [],
      money: 100
    } 

  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => {
      let firstFour = sushiData.slice(this.state.index, this.state.index + 4)
      this.setState({
        allSushi: sushiData,
        currentSushi: firstFour
      })
    })
  }

  moreSushi = () => {
    let newIndex = this.state.index + 4
    this.setState({
      index: newIndex,
      currentSushi: this.state.allSushi.slice(newIndex, newIndex + 4)
    })
  }

  eatSushi = (sushiObj) => {
    // let copyEatenSushi = [...this.state.eatenSushi]
    // copyEatenSushi.push(sushiObj)

    // this.setState({
    //   eatenSushi: copyEatenSushi
    // })

  if(this.state.eatenSushi.includes(sushiObj)) {
      alert("You already ordered this sushi!")
    } else if (this.state.money - sushiObj.price < 0 ) {
      alert("You're Poor!! Wash Dishes")
    } else {
      this.setState({
        money: this.state.money - sushiObj.price,
        eatenSushi: [...this.state.eatenSushi, sushiObj]
      })
    }
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer 
          currentSushi={this.state.currentSushi}  
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
          orderedSushi={this.state.eatenSushi}
        />
        <Table money={this.state.money} orderedSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;