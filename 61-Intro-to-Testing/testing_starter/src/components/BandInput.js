import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
    constructor() {
        super() 
        this.state = {
            name: '',
            genre: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitBand(this.state)
        this.setState({
            name: '',
            genre: ''
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h3>Add a Band!</h3>
                    <p>
                        <label>Name: </label>
                        <input type='text' placeholder='name' name='name' value={this.state.name} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Genre: </label> 
                        <input type='text' placeholder='genre' name='genre' value={this.state.genre} onChange={this.handleOnChange} />
                    </p>
                    <input type='submit' name='Sumbit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitBand: (newBand) => dispatch({ type: 'ADD_BAND', payload: newBand })
    }  
}

export default connect(null, mapDispatchToProps)(BandInput)