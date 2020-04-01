import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageList from './MessageList'
import SendMessage from './SendMessage'

class ChatWindow extends Component {
 
  render() {
    const { user, messages, addMessage } = this.props
    
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

		  <MessageList className="message-list" messages={messages} user={user} />  

		  <SendMessage sendMessage={addMessage} user={user} />
        </div>
    )
  }
}

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default ChatWindow