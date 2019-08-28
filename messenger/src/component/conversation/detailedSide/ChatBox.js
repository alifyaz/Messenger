import React from 'react'

export default class ChatBox extends React.Component {
  render() {
    return (
      <div className='chat-box'>
        {
          this.props.messagesList.map((message, index) => {
            if (message.sender === 1) {
              return (
                <div key={index} className='sender' ><span>{message.text}</span></div>
              )
            } else {
              return (
                <div key={index} className='receiver' ><span>{message.text}</span></div>
              )
            }
          })
        }

      </div>
    )
  }
}
