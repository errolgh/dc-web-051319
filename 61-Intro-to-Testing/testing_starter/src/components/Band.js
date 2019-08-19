import React, { Component } from 'react';
import { connect } from 'react-redux';

class Band extends Component {
    render() {
        return (
            <div className='band-card'>
                <h2>{this.props.band.name}</h2>
                <img src={this.props.band.img_url} />
                <div>Genre: {this.props.band.genre}</div>
                <button onClick={() => this.props.deleteBand(this.props.band.id)} >Delete</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBand: (bandId) => dispatch({ type: 'DELETE_BAND', payload: bandId})
    }
}

export default connect(null, mapDispatchToProps)(Band)