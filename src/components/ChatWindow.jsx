import React, { PropTypes } from 'react';

const ChatWindow = ({ Messages }) => {
  const totalMessages = [];
  totalMessages.push(Messages);
  return (
    <div className="chat-window">
      {totalMessages.map((message, index) => (
        <section className="chat-window-message" key={index}>
          <div className="title">{message.name}</div>
          <div className="text">{message.text}</div>
          <div className="timeStamp">{message.createdAt}</div>
        </section>
      ))}
    </div>
  );
};

ChatWindow.propTypes = {
  Messages: PropTypes.object,
};

export default ChatWindow;
