import React, { PropTypes } from 'react';

const ChatWindow = ({ Messages }) => (
  <div className="chat-window">
    <section className="chat-window-message">
      name: {Messages.name}, say: {Messages.text}
    </section>
  </div>
);

ChatWindow.propTypes = {
  Messages: PropTypes.arrayOf(PropTypes.object),
};

ChatWindow.defaultProps = {
  Messages: [{}],
};

export default ChatWindow;
