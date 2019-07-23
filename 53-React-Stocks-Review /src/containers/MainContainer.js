import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      allStock: [],
      myPortfolios: [],
      sortBy: "none",
      filterBy: "none"
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(data => {
      this.setState({
        allStock: data
      })
    })
  }

  buyStock = (stockObj) => {

    this.state.myPortfolios.find(stock => stock.id === stockObj.id) ? (
      alert("you already added this") 
    ) : (
      this.setState({
        myPortfolios: [...this.state.myPortfolios, stockObj]
      })
    )

    // let copyMyPortfolios = [...this.state.myPortfolios]
    // copyMyPortfolios.push(stockObj)

    // this.setState({
    //   myPortfolios: copyMyPortfolios
    // })

  }

  sellStock = (stockObj) => {
   let copyMyPortfolios = [...this.state.myPortfolios]

   let updatedMyPortfolios = copyMyPortfolios.filter(stock => stock.id !== stockObj.id)

  //  let foundStock = copyMyPortfolios.find(stock => stock.id === stockObj.id)
  //  let index = copyMyPortfolios.indexOf(foundStock)
  //   copyMyPortfolios.splice(index, 1)
   
    this.setState({
      myPortfolios: updatedMyPortfolios
    })

  }

  sortBy = (event) => {
    this.setState({
        sortBy: event.target.value
    })
  
  }

  sortStock = () => {
    let copyAllStock = [...this.state.allStock]
    if(this.state.sortBy === "Alphabetically") {
      return copyAllStock.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (this.state.sortBy === "Price") {
      return copyAllStock.sort((a,b) => b.price - a.price)
    } else if (this.state.sortBy === "none") {
      return copyAllStock
    } 
  }

  selectChange = (event) => {
    this.setState({
      filterBy: event.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          sortBy={this.sortBy} 
          sortState={this.state.sortBy}
          selectChange={this.selectChange}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                allStock={this.sortStock()}
                handleClick={this.buyStock}
                filterBy={this.state.filterBy}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
              myPortfolios={this.state.myPortfolios}
              handleClick={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
