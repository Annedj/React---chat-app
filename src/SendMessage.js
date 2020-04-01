import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SendMessage extends Component {
  state = {
    text: '',
    username: ''
  }

  updateMessage = (event) => {
    this.setState({
      ...this.props.user,
      text: event.target.value
    })
  }

  onSendMessage = (event) => {
    event.preventDefault()
	this.props.sendMessage(this.state)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({
      text: '',
      username: ''
    })
  }

  // If the user did not type anything, he/she should not be allowed to submit.
  isDisabled = () => {return (this.state.text === '')}

  render() {
	console.log(this.state.text === '')

    return (
      <div>
   	    <form className="input-group">
          <input type="text" className="form-control" value={this.state.text} placeholder="Enter your message..." onChange={(e) => this.updateMessage(e)} />
          <div className="input-group-append">
            <button className="btn submit-button" onClick={this.onSendMessage} disabled={this.isDisabled()}>
      		  SEND
      		</button>
      	  </div>
  		</form>
   	  </div>
    )
  }
}

SendMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default SendMessage