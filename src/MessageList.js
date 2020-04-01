import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MessageList extends Component {
  render() {
    const {user, messages} = this.props
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === user.username ? 'message sender' : 'message recipient'
            }
          >
  		    <p>{`${message.username}: ${message.text}`}</p>
  		  </li>
  		))}
	  </ul>
    )
  }
}

MessageList.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired  
}

export default MessageList