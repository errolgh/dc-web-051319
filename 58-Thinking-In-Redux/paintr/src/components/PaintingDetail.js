import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {voteForPainting} from '../redux/actions'

class PaintingDetail extends React.Component {
  render() {
    console.log("PaintingDetail props:", this.props)
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <Link to={`/paintings/${this.props.painting.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {    this.props.voteForPainting(this.props.painting.id)   }}
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}

let mapStateToProps = (store, ownProps) => {
  return {
    painting: store.paintings.find(p => p.id === ownProps.match.params.paintingId) //get the id from the URL, then find that painting
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     voteForPainting: (paintingId) => {  dispatch(  voteForPainting(paintingId) )  }
//   }
// }

export default withRouter(connect(mapStateToProps, {voteForPainting})(PaintingDetail))
