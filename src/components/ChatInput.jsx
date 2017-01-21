import React, { Component, PropTypes } from 'react';

class ChatInput extends Component {

  static propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  }

  handleMessageSubmit(evt) {
    evt.preventDefault();
    const text = this.refs.inputText.value;
    this.props.onMessageSend('Jay', text);
    this.refs.inputText.value = '';
  }

  render() {
    return (
      <div className="chat-input">
        <form onSubmit={::this.handleMessageSubmit}>
          <input type="text" placeholder="Please Enter Your Messages" ref="inputText" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatInput;
