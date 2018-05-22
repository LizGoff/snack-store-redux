import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import SnackForm from '../components/SnackForm'
import SnackList from '../components/SnackList'


class App extends Component {

  render() {
    return (
      <div className="App">
        <SnackList />
        <SnackForm />
      </div>
    );
  }
}

export default connect()(App);
