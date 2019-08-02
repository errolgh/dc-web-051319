import React, {Component} from 'react'
import {connect} from 'react-redux'
import logo from '../logo.svg'

class Header extends Component {

  renderDescription = () => {
    const remainder = this.props.countValue % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.countValue + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3 style={{color: this.props.color}}>{this.renderDescription()}</h3>
      </header>
    );
  }
}
let mapStateToProps = state => ({countValue: state.count})

export default connect(mapStateToProps)(Header)




// let EnhancedComponent = higherOrderComponent(SomeComponent)
// let BlueCounter = withBlue(Counter)

// const withBlue = (SomeComponent) => {
//   class EnhancedComponent extends Component {
//     render(){
//       return <SomeComponent {...this.props} color="blue"/>
//     }
//   }
//   return EnhancedComponent  //show be an exact copy of SomeComponent but is has props={color:"blue"}
// }
//
// let CountHeader = withCount(Header)
// let CountCounter = withCount(Counter)
