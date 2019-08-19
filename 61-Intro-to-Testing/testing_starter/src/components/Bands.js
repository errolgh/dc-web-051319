import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
    renderBands = () => {
        return this.props.bands.map(band => {
            return <Band band={band} key={band.id} />
        })   
    }

    render() {
        console.log(this.props.bands)
        return (
            <div id='bands' >
                {this.renderBands()}
            </div>
        )
    }
}

export default Bands