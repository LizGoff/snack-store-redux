import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSnack: ''
        }
    };

handleSnackChange = (event) => {
    this.setState({
        newSnack:
            event.target.value,
    });
    console.log(this.state.newSnack);
}// input field end

handleSnackButton = () => {
    const action = { type: 'ADD_BUTTON', someProp: 'Snack in', payload: this.state.newSnack };
    this.props.dispatch(action)

    this.setState({
        newSnack: '',
    });
} // inputButton stop

    render() {
        return(
            <div>
                <h3>Input Snack Here!</h3>
                <input onChange={this.handleSnackChange} value={this.state.newSnack} />
                <button onClick={this.handleSnackButton}>Enter Snack</button>
            </div>
        )
    }
}   

export default connect()(SnackForm);