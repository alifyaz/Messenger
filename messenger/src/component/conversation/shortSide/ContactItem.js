import React from 'react'
import '../Messenger.css'
import { setActiveChat } from '../../../action/Conversation'

export default class ContactItem extends React.Component {
  render() {
    return (
      <div className='contact-item' onClick={() => this.props.dispatch(setActiveChat(this.props.email))}>
        <svg width="42" height="42">
          <circle cx="21" cy="21" r="20" />
        </svg>
        <img src={this.props.avatar} alt='avatar' />
        <div className="contact-item-details-container">
          <div className="contact-item-user-time-container">
            <span className="contact-item-user">
              {
                (this.props.firstName !== undefined ? this.props.firstName : '') + ' ' +
                (this.props.lastName !== undefined ? this.props.lastName : '')
              }
            </span>
            <span className="contact-item-time">12.29.18</span>
          </div>
          <div className="contact-item-desc-unseen-container">
            <span className="contact-item-desc">the last message sent message message message message message
                                message message</span>
            <span className="contact-item-unseen">10</span>
          </div>
        </div>
      </div>
    )
  }
}