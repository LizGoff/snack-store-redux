import React, { Component } from 'react';
import { connect } from 'react-redux';
import SnackForm from './SnackForm.js'

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class SnackList extends Component {
    render() {
        return (
            <div>
                <h4>List of Snacks!</h4>
                <ul>
                    {this.props.reduxState.mainReducer.map((input, i) =>
                        <li key={i}>
                        {input}</li>)}
                </ul>
            </div>
        )
    }
}


export default connect(mapReduxStateToProps)(SnackList);