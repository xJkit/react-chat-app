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
      newMsg: {},
    };
  }

  componentWillMount() {
    socket.on('newMsg', msg => {
      console.log('git new messages:', msg);
      this.setState({
        newMsg: msg,
      });
    });
  }

  onMessageSend(name, text) {
    socket.emit('createMsg', {
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
        <ChatWindow Messages={this.state.newMsg} />
        <ChatInput onMessageSend={::this.onMessageSend} />
      </div>
    );
  }
}

export default connect()(App);
