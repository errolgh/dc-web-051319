import React, { Component } from 'react';
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {
    render() {
        return (
            <div>
                <BandInput />
                <Bands bands={this.props.bands} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { bands: state.bands }
}

export default connect(mapStateToProps)(BandsContainer)