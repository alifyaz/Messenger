import React from 'react'
import { sendNewMessage } from '../../../action/Conversation'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newMessage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSend = this.handleSend.bind(this)
  }

  handleChange(e) {
    this.setState({ newMessage: e.target.value })
  }

  handleSend() {
    this.props.dispatch(sendNewMessage(this.state.newMessage))
    this.setState({ newMessage: '' })
  }

  render() {
    return (
      <div className='footer'>
        <input
          type='text'
          placeholder='Write a message...'
          value={this.state.newMessage}
          onChange={this.handleChange}
        />
        <i className='material-icons' onClick={this.handleSend}>send</i>
      </div>
    )
  }
}
