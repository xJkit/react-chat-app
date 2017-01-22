import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ChatWindow from 'components/ChatWindow';
import ChatInput from 'components/ChatInput';
// load socket.io
const socket = require('socket.io-client')();

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: [],
    };
  }

  onMessageSend(name, text) {
    socket.emit('newMsg', {
      name,
      text,
    });
  }

  onMessageReceive(msg) {
    this.setState({
      msg: [
        ...this.state.msg,
        msg,
      ],
    });
  }

  render() {
    return (
      <div className="app">
        <h1>J's Chatting Space</h1>
        <div className="chat-window">
          {this.props.children}
        </div>
        <ChatWindow Messages={this.state.msg} />
        <ChatInput onMessageSend={::this.onMessageSend} />
      </div>
    );
  }
}

export default connect()(App);
