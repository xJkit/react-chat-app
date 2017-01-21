import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ChatInput from 'components/ChatInput';
// load socket.io
const socket = require('socket.io-client')();

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  onMessageSend(name, text) {
    socket.emit('newMsg', {
      name,
      text,
    });
  }

  render() {
    return (
      <div className="app">
        <h1>J's Chatting Space</h1>
        <div className="chat-window">
          {this.props.children}
        </div>
        <ChatInput onMessageSend={::this.onMessageSend} />
      </div>
    );
  }
}

export default connect()(App);
