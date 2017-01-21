import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
// load socket.io
const socket = require('socket.io-client')();

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  componentWillMount() {
    // create a socket connection
    socket.on('connect', () => {
      console.log('connected to server');
    });

    socket.on('disconnect', () => {
      console.log('server is down!');
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <h1>App containers rendered by default</h1>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
