import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {

  increment = (num) => {
    this.props.dispatch(  { type: "INCREMENT", payload: num }  )
  };

  decrement = (num) => {
    this.props.dispatch(  { type: "DECREMENT", payload: num }  )
  };

  render() {
    console.log("Counter's props:", this.props)
    return (
      <div className="Counter">
        <button onClick={()=>this.decrement(5)}> -5 </button>
        <button onClick={()=>this.decrement(1)}> - </button>
        <button onClick={()=>this.increment(1)}> + </button>
        <button onClick={()=>this.increment(3)}> +3 </button>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  //this object maps prop: state.????
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Counter)
