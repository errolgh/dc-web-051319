import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  filterStocks = () => {

    // Tech, Sportswear, Finance and none
    if (this.props.filterBy !== "none") {
      return this.props.allStock.filter(stock => stock.type === this.props.filterBy)
    } else {
      return this.props.allStock
    }
    
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.filterStocks().map(stockObj => {
            return <Stock key={stockObj.id} stockObj={stockObj} handleClick={this.props.handleClick}  />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
