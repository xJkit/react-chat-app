import React, { Component, PropTypes } from 'react';

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div className="app">
        <h1>Js Chatting Space</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
