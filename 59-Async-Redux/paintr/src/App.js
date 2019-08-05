import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";
import AboutPage from "./components/AboutPage";
import {connect} from 'react-redux'
import {fetchingPainting} from './redux/actions'

class App extends Component {
  componentDidMount(){
    this.props.fetchingPainting()
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={PaintingsContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingPainting: () => {dispatch( fetchingPainting() )}
})

export default withRouter(connect(null, mapDispatchToProps)(App));
